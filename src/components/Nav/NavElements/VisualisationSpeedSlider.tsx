import React from "react";

interface Props {
  currentSpeed: (e: any) => void;
  animRunning: boolean;
  speedRef: React.Ref<HTMLInputElement>;
}

function VisualisationSpeedSlider(props: Props) {
  return (
    <>
      <input
        onChange={props.currentSpeed}
        data-placement="top"
        title="Speed: 3"
        type="range"
        className="form-range m-lg-2"
        id="customRange2"
        min="1"
        max="3"
        defaultValue="3"
        disabled={props.animRunning}
      />
      <input
        ref={props.speedRef}
        defaultValue="Speed: 3"
        id="currentAlgorithmForm"
        className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
        type="text"
        placeholder=""
        disabled
      />
    </>
  );
}

export default VisualisationSpeedSlider;
