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
    <div className="App px-8">
      <QuestsPane quests={TestQuests} />
    </div>
  );
}

export default App;
