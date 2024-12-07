import React from 'react';
import EditableText from './EditableTextField';

export default function SubTask({ task, onSubCheck, onSubEdit, onSubDelete }) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        checked={task.complete}
        onChange={(e) => {
          onSubCheck(task.id, e.target.checked);
        }}
      />
      <EditableText task={task} onEdit={onSubEdit} />
      <button className="text-red-600 ml-1 font-bold" onClick={() => onSubDelete(task.id)}>
        X
      </button>
    </div>
  );
}
