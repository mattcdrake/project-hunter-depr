import React from 'react';

import { Task, TaskProps} from './Task';
// @dev Test data
const TestTasks: TaskProps[] = [
  {taskName: "Do laundry", dueDate: new Date(), difficulty: 5},
  {taskName: "Watch baseball", dueDate: new Date(), difficulty: 2},
  {taskName: "Get a job", dueDate: new Date(), difficulty: 8},
];

function TasksPane() {
  return (
    <div className="border border-black max-w-lg">
      {TestTasks.map((task) => (
          <Task 
          taskName={task.taskName}
          dueDate={task.dueDate}
          difficulty={task.difficulty}
        />
        ))}
    </div>
  );
};

export default TasksPane;
