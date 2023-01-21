import { useEffect } from 'react';
const useClick = onClick => {
    if(typeof onClick !== "function"){
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};

const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);