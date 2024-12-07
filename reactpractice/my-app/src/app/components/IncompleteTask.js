'use client';

import React, { useState, useEffect } from 'react';
import SubTaskForm from './SubTaskForm';
import SubTaskDiv from './SubTaskDiv';
import EditableText from './EditableTextField';

export default function IncompleteTask({
  task,
  onCheck,
  onEdit,
  onDelete,
  onSubAdd,
  onSubCheck,
  onSubEdit,
  onSubDelete,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [subID, setSubID] = useState(1);
  const [rotation, setRotation] = useState(0);

  /*
  each subtask needs its own state within localstorage or i need to move the subtask state to be a property that lives within the main task state
  */

  //   useEffect(() => {
  //     const subTaskData = window.localStorage.getItem('subTaskState');
  //     setSubTasks(JSON.parse(subTaskData));
  //     const subIdData = window.localStorage.getItem('subIdState');
  //     setSubID(JSON.parse(subIdData));
  //   }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem('subTaskState', JSON.stringify(subTasks));
  //   }, [subTasks]);

  //   useEffect(() => {
  //     window.localStorage.setItem('subIdState', JSON.stringify(subID));
  //   }, [subID]);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setRotation(rotation === 0 ? -90 : 0);
  };

  const handleAddNewSubTask = (taskId, newSubTask) => {
    onSubAdd(taskId, newSubTask);
    setSubID((prevID) => prevID + 1);
  };

  const handleSubCheckBox = (subTaskId, completed) => {
    onSubCheck(task.id, subTaskId, completed);
  };

  const handleSubEdit = (subTaskId, text) => {
    onSubEdit(task.id, subTaskId, text);
  };

  const handleDeleteSubTask = (subTaskId) => {
    onSubDelete(task.id, subTaskId);
  };

  //   const handleDeleteSubTask = (id) => {
  //     setSubTasks((tasks) => tasks.filter((task) => task.id !== id));
  //   };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <input
          type="checkbox"
          checked={task.complete}
          onChange={(e) => {
            onCheck(task.id, e.target.checked);
          }}
        />

        <EditableText task={task} onEdit={onEdit} />

        <button onClick={() => handleClick(task.id)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 1s ease-out',
            }}
          >
            <path
              d="M12 8l-6 6 6 6"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
        <button
          className="text-red-600 ml-1 font-bold"
          onClick={() => onDelete(task.id)}
        >
          X
        </button>
      </div>

      {activeIndex === task.id && (
        <div className="ml-10 flex flex-col">
          <SubTaskForm
            task={task}
            onSubAdd={handleAddNewSubTask}
            subID={subID}
          />
          <SubTaskDiv
            subTasks={task.subTasks}
            onSubCheck={handleSubCheckBox}
            onSubEdit={handleSubEdit}
            onSubDelete={handleDeleteSubTask}
          />
        </div>
      )}
    </div>
  );
}
