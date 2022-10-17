import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

interface Props {
  currentAlgorithmUpdate: (e: any) => void;
  currentAlgorithm: { name: string; active: boolean }[];
}

function AlgorithmDropDown(props: Props) {
  return (
    <NavDropdown title="Choose Algorithm" id="collasible-nav-dropdown">
      <div onClick={props.currentAlgorithmUpdate}>
        {props.currentAlgorithm.map((sortAlg, index) => (
          <NavDropdown.Item key={`${index}`}>{sortAlg.name}</NavDropdown.Item>
        ))}
      </div>
    </NavDropdown>
  );
}

export default AlgorithmDropDown;
