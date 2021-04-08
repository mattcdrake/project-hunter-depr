import React from 'react';

import { Quest } from '../types/Quest';
import { QuestSlug } from './QuestSlug';

interface QuestsPaneProps {
  quests: Quest[];
};

/*
 * Contains all of the quest slugs. Top-left part of the screen on PC.
 */
function QuestsPane(props: QuestsPaneProps) {
  return (
    <div className="border border-black max-w-lg p-4">
      <p className="px-4 text-2xl">Assigned</p>
      <div className="border border-black">
        {props.quests.map((quest) => (
            <QuestSlug
              questName={quest.name}
              dueDate={quest.dueDate}
              difficulty={quest.difficulty}
          />
          ))}
      </div>
    </div>  
  );
};

export default QuestsPane;
