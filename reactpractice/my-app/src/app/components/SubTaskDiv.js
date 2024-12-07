import React from 'react';
import SubTask from './SubTask';

export default function SubTaskDiv({
  subTasks,
  onSubEdit,
  onSubDelete,
  onSubCheck,
}) {
  return (
    <div>
      <ul>
        {subTasks &&
          subTasks.map((task) => (
            <SubTask
              key={task.id}
              task={task}
              onSubCheck={onSubCheck}
              onSubEdit={onSubEdit}
              onSubDelete={onSubDelete}
            />
          ))}
      </ul>
    </div>
  );
}
