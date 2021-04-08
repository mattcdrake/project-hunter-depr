import React from 'react';

interface TaskProps {
  taskName: string;
  dueDate: Date;
  difficulty: number;
};

/*
 * Displays the header info of a single task.
 */
function Task(props: TaskProps) {
  return (
    <div className="border border-black max-w-full flex justify-between">
      <span className="px-2">{props.taskName}</span>
      <span className="space-x-4 px-2">
        <span>{props.dueDate.toDateString()}</span>
        <span>★{props.difficulty}</span>
      </span>
    </div>
  );
};

export { Task} ;

export type { TaskProps };

