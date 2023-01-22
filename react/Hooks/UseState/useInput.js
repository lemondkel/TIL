// useInput은 단순히 input을 업데이트 해줌

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    };
    return {value, onChange};
}

const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>
        </div>
    );
}

const root = document.getAnimations("root");
ReactDOM.render(<App/>, rootElement);