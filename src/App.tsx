import React from 'react';

import { Quest } from './types/Quest';
import QuestsPane from './components/QuestsPane';

// @dev Test data
const TestQuests: Quest[] = [
  {name: "Do laundry", dueDate: new Date(), difficulty: 5},
  {name: "Watch baseball", dueDate: new Date(), difficulty: 2},
  {name: "Get a job", dueDate: new Date(), difficulty: 8},
];

function App() {
  return (
    <div className="App px-8 flex justify-between space-x-4 divide-x-8 divide-black">
      {/* Left side of the app */}
      <div className="flex flex-col h-screen w-1/2">
        <div className="m-4 h-1/2 border border-black">
          <QuestsPane quests={TestQuests} />
        </div>
        <div className="m-4 overflow-auto border border-black">
          Criteria Pane 
        </div>
      </div>

      {/* Right side of the app */}
      <div className="h-screen w-1/2 p-4">
        Info Pane
      </div>
    </div>
  );
}

export default App;
