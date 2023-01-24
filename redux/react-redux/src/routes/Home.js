import React from "react";
import { useState } from "react";
import {addToDo} from "../store";
import ToDo from "../element/ToDo";
import {
    useSelector,
    useDispatch
} from "react-redux";

const Home = () => {
    const [text, setText] = useState("");
    const toDos = useSelector(state => state);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
         {toDos.map(toDo => (
           <ToDo {...toDo} key={toDo.id} />
         ))}
       </ul>
        </>
    );
}

export default Home;   