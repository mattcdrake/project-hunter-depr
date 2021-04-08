import React from 'react';

import TasksPane from './components/TasksPane';

function App() {
  return (
    <div className="App px-8">
      <p className="px-4 text-2xl">Assigned</p>
      <TasksPane />
    </div>
  );
}

export default App;
