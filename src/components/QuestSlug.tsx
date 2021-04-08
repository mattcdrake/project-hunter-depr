import React from 'react';

interface QuestSlugProps {
  questName: string;
  dueDate: Date;
  difficulty: number;
};

/*
 * Displays the header info of a single quest.
 */
function QuestSlug(props: QuestSlugProps) {
  return (
    <div className="border border-black max-w-full flex justify-between">
      <span className="px-2">{props.questName}</span>
      <span className="space-x-4 px-2">
        <span>{props.dueDate.toDateString()}</span>
        <span>★{props.difficulty}</span>
      </span>
    </div>
  );
};

export { QuestSlug } ;
export type { QuestSlugProps };

