'use client'
import React, { useState } from 'react'

export default function ToDoForm({onAdd, id}) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        const newTask = {
            id: id,
            task: inputValue,
            complete: false,
            subTasks: []
        }
        onAdd(newTask);
        document.querySelector("#taskInput").value = "";
        setInputValue("");
    }

  return (
    <form className='flex w-max' onSubmit={handleSubmit}>
        <input type='text' placeholder='What would you like to do?' className="w-96"  id='taskInput' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button type='submit' className='border-solid border-2 border-white text-white p-2'>Submit</button>
    </form>
  )
}
