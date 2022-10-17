import React from "react";

interface Props {
  sortDivs: () => void;
  animRunning: boolean;
}

function StartButton(props: Props) {
  return (
    <button
      onClick={props.sortDivs}
      type="button"
      className="btn btn-outline-primary"
      disabled={props.animRunning}
    >
      Sort!
    </button>
  );
}

export default StartButton;
