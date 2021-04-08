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
    <div className="App px-8 flex space-x-4">
      {/* Left side of the app */}
      <div className="flex-1 border-4 border-black w-5/12">
        <QuestsPane quests={TestQuests} />
        <div className="border border-black">
          Criteria Pane
        </div>
      </div>

      {/* Right side of the app */}
      <div className="flex-1 border-4 border-black w-5/12">
        Info Pane
      </div>
    </div>
  );
}

export default App;
