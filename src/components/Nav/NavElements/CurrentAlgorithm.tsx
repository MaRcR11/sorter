import React from "react";

interface Props {
  inputRef: React.Ref<HTMLInputElement>;
}

function CurrentAlgorithm(props: Props) {
  return (
    <input
      ref={props.inputRef}
      defaultValue="Bubble Sort"
      id="currentAlgorithmForm"
      className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
      type="text"
      placeholder=""
      disabled
    />
  );
}

export default CurrentAlgorithm;
