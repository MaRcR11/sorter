import React from "react";

interface Props {
  comparisonRef: React.Ref<HTMLInputElement>;
}

function AlgorithmComparisons(props: Props) {
  return (
    <input
      ref={props.comparisonRef}
      defaultValue="Comparisons: 0"
      id="currentAlgorithmForm"
      className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
      type="text"
      placeholder=""
      disabled
    />
  );
}

export default AlgorithmComparisons;
