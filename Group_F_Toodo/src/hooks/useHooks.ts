import React, { useState } from 'react'
import { type ITodo } from '../components/todo';





const useHooks = () => {
 const [title, settitle] = useState('');
 const [todos, settodos] = useState<ITodo[] | null>(null);

 const AddTodo = () => {
    if(!title) return;
    const id = todos ? todos.length + 1 : 1;
    
    
    const formBody:ITodo = {
        id : id,
        title : title,
        isCompleted : false,
        timeCompleted : Date.now()
    }
    settodos(todos ? [...todos, formBody] : [formBody]);
    console.log(formBody);
    settitle('');
 
        }
    
  return{
    title,
    settitle,
    todos,
    settodos,
    AddTodo
  }
}

export default useHooks