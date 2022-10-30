import React from "react";

interface Props {
  currentAmountOfDivs: (e: any) => void;
  inputRef: React.Ref<HTMLInputElement>;
  rangeRef: React.Ref<HTMLInputElement>;
  rangeRefStart: React.Ref<HTMLInputElement>;
  animRunning: boolean;
}

function AmountOfBarsSlider(props: Props) {
  return (
    <>
      <input
        ref={props.rangeRefStart}
        onChange={props.currentAmountOfDivs}
        data-placement="top"
        title="Amount of bars: 125"
        type="range"
        className="form-range m-lg-2"
        id="customRange"
        min="4"
        max="250"
        defaultValue="125"
        disabled={props.animRunning}
      />
      <input
        ref={props.rangeRef}
        defaultValue="Amount of bars: 125"
        id="currentAlgorithmForm"
        className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
        type="text"
        placeholder=""
        disabled
      />
    </>
  );
}

export default AmountOfBarsSlider;
