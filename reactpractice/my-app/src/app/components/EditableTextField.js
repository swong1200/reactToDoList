'use client';
import React, { useState } from 'react';

function EditableText({ task, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.task);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    onEdit(task.id, value);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span
          className={
            task.complete
              ? 'line-through ml-2 text-neutral-100'
              : 'ml-2 text-neutral-100'
          }
          onClick={handleClick}
        >
          {value}
        </span>
      )}
    </div>
  );
}

export default EditableText;
