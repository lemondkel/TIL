import React from "react";
 import { useDispatch } from "react-redux";
 import { deleteToDo } from "../store";



 const onClick = (id) => {
    const dispatch = useDispatch;
    dispatch(deleteToDo(id));
 }
 function ToDo({ text, id }) {
   return (
     <li>
       {text} <button onClick={onClick}>DEL</button>
     </li>
   );
 }

 export default ToDo;



