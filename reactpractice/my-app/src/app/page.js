'use client';
/*
Make parent tasks and sub-tasks editable -done
Make collapsible task smooth and clean
Add ability to delete any parent or sub-task -done

*/

import ToDoForm from './components/ToDoForm';
import TaskDiv from './components/TaskDiv';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [id, setID] = useState(1);

  useEffect(() => {
    const taskData = window.localStorage.getItem('taskState');
    setTasks(JSON.parse(taskData));
    const idData = window.localStorage.getItem('idState');
    setID(JSON.parse(idData));
    console.log('initial render');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('taskState', JSON.stringify(tasks));
    console.log('change of task state');
  }, [tasks]);

  useEffect(() => {
    window.localStorage.setItem('idState', JSON.stringify(id));
    console.log('change of id state');
  }, [id]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setID((prevID) => prevID + 1);
  };

  const handleCheckBox = (taskId, completed) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, complete: completed };
        } else {
          return task;
        }
      })
    );
  };

  const handleEditTask = (taskId, text) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, task: text };
        } else {
          return task;
        }
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleAddSubTask = (taskId, newSubTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            subTasks: [...task.subTasks, newSubTask],
          };
        } else {
          return task;
        }
      })
    );
  };

  const handleSubCheckBox = (taskId, subTaskId, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          task.subTasks.map((subTask) => {
            if (subTask.id === subTaskId) {
              subTask.complete = completed;
              return subTask;
            } else {
              return subTask;
            }
          });
          return task;
        } else {
          return task;
        }
      })
    );
  };

  const handleEditSubTask = (taskId, subTaskId, text) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.subTasks.map((subTask) => {
          if (subTask.id === subTaskId) {
            subTask.task = text;
            return subTask;
          } else {
            return subTask;
          }
        });
        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDeleteSubTask = (taskId, subTaskId)=> {
    const updatedTasks = tasks.map((task)=> {
        if (task.id === taskId) {
            return {
                ...task,
            subTasks: task.subTasks.filter((subTask)=> subTask.id !== subTaskId)
            }
        } else {
            return task
        }
    })
    setTasks(updatedTasks);
  }

  return (
    <main className="flex flex-col items-center justify-center pt-16">
      <ToDoForm onAdd={handleAddTask} tasks={tasks} id={id} />
      <div className="flex flex-row gap-40 mt-6 w-screen justify-evenly">
        <TaskDiv
          tasks={tasks}
          name={'Tasks'}
          complete={false}
          onCheck={handleCheckBox}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onSubAdd={handleAddSubTask}
          onSubCheck={handleSubCheckBox}
          onSubEdit={handleEditSubTask}
          onSubDelete={handleDeleteSubTask}
        />
        <TaskDiv tasks={tasks} name={'Completed'} complete={true} />
      </div>
    </main>
  );
}
