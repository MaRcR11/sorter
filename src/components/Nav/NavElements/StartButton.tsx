import React from "react";

interface Props {
  sortDivs: () => void;
  animRunning: boolean;
  isSorted: boolean;
}

function StartButton(props: Props) {
  return (
    <button
      onClick={props.sortDivs}
      type="button"
      className="btn btn-outline-primary"
      disabled={props.isSorted}
    >
      Sort!
    </button>
  );
}

export default StartButton;
