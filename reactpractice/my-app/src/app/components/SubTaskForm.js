'use client';
import React, { useState } from 'react';

export default function SubTaskForm({ task, onSubAdd, subID }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        id: subID,
        task: inputValue,
        complete: false,
    };

    onSubAdd(task.id, newTask);

    document.querySelector('.subTaskInput').value = '';
    setInputValue('');
  };

  return (
    <form
      className="flex transition ease-in-out duration-1000 h-48"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What else?"
        className="min-w-50 subTaskInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="border-solid border-2 border-white text-white pl-2 pr-2"
      >
        Submit
      </button>
    </form>
  );
}
