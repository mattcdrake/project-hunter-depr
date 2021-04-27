import React from "react";

interface IProps {
  toggleModal: () => void
}

function NewQuestModal(props: IProps) {
  return (
    <div id="questModal" onClick={props.toggleModal} className="fixed z-10 w-full h-full bg-black bg-opacity-50 top-0 left-0">
      <div onClick={(e) => e.stopPropagation()} className="my-12 mx-auto w-2/3 h-5/6 bg-black">
        Modal Success
      </div>
    </div>
  );
}

export { NewQuestModal };
