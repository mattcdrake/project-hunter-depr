import React from "react";

import { Quest } from "../types/Quest";
import { QuestSlug } from "./QuestSlug";

interface IProps {
  quests: Quest[];
  toggleQuestModal: () => void;
}

/*
 * Contains all of the quest slugs. Top-left part of the screen on PC.
 */
function QuestsPane(props: IProps) {
  return (
    <div className="p-4">
      <p className="px-4 text-2xl">Assigned</p>
      <ul>
        {props.quests.map((quest) => (
          <li>
            <QuestSlug
              questName={quest.name}
              dueDate={quest.dueDate}
              difficulty={quest.difficulty}
            />
          </li>
        ))}
        <li
          className="border border-black max-w-full mx-auto text-center"
          onClick={() => props.toggleQuestModal()}
        >
          Add a quest
        </li>
      </ul>
    </div>
  );
}

export default QuestsPane;
