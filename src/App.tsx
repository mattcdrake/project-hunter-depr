import React from "react";

import { NewQuestModal } from "./components/NewQuestModal";
import { Quest } from "./types/Quest";
import QuestsPane from "./components/QuestsPane";

// @dev Test data
const TestQuests: Quest[] = [
  { name: "Do laundry", dueDate: new Date(), difficulty: 5 },
  { name: "Watch baseball", dueDate: new Date(), difficulty: 2 },
  { name: "Get a job", dueDate: new Date(), difficulty: 8 },
];

interface IProps {}
interface IState {
  quests: Quest[];
  modalOn: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
      super(props);
    this.state = {
      quests: TestQuests,
      modalOn: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOn: !this.state.modalOn,
    });
  }

  render() {
    let modal;
    if (this.state.modalOn) {
      modal = <NewQuestModal toggleModal={this.toggleModal} />
    }

    return (
      <div className="App">
        <div className="App flex justify-between space-x-4 divide-x-8 divide-black">
          {/* Left side of the app */}
          <div className="flex flex-col h-screen w-1/2">
            <div className="m-4 h-1/2 border border-black">
              <QuestsPane
                quests={this.state.quests}
                toggleQuestModal={this.toggleModal}
              />
            </div>
            <div className="m-4 overflow-auto border border-black">
              Criteria Pane
            </div>
          </div>

          {/* Right side of the app */}
          <div className="h-screen w-1/2 p-4">Info Pane</div>
        </div>
        {modal}
      </div>
    );
  }
}

export default App;
