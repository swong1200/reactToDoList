import React from 'react';
import CompleteTask from './CompleteTask';
import IncompleteTask from './IncompleteTask';

export default function Task({ task, onCheck, complete, onEdit, onDelete, onSubAdd, onSubCheck, onSubEdit, onSubDelete }) {
  return complete ? (
    <CompleteTask task={task.task} />
  ) : (
    <IncompleteTask
      task={task}
      onCheck={onCheck}
      onEdit={onEdit}
      onDelete={onDelete}
      onSubAdd={onSubAdd}
      onSubCheck={onSubCheck}
      onSubEdit={onSubEdit}
      onSubDelete={onSubDelete}
    />
  );
}
