import React from 'react';
import Task from './Task';

export default function TaskDiv({
  name,
  tasks,
  complete,
  onCheck,
  onEdit,
  onDelete,
  onSubAdd,
  onSubCheck,
  onSubEdit,
  onSubDelete
}) {
    console.log(tasks)
  const filteredTasks = tasks.filter((task) => task.complete === complete);

  return (
    <div className="w-1/2 flex flex-col items-center">
      <h1 className="text-white text-xl underline decoration-double">{name}</h1>
      <ul className="mt-4 w-full pt-4 pl-20 min-h-20">
        {filteredTasks &&
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              onCheck={onCheck}
              complete={complete}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onSubAdd={onSubAdd}
              onSubCheck={onSubCheck}
              onSubEdit={onSubEdit}
              onSubDelete={onSubDelete}
            />
          ))}
      </ul>
    </div>
  );
}
