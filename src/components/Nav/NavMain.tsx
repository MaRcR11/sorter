import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Title from "./Title";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import AlgorithmDropDown from "./AlgorithmDropDown";
import CurrentAlgorithm from "./CurrentAlgorithm";
import AmountOfBarsSlider from "./AmountOfBarsSlider";
import VisualisationSpeedSlider from "./VisualisationSpeedSlider";
import StartButton from "./StartButton";
import AlgorithmComparisons from "./AlgorithmComparisons";

interface Props {
  sortDivs: () => void;
  currentSpeed: (e: any) => void;
  currentAlgorithmUpdate: (e: any) => void;
  currentAmountOfDivs: (e: any) => void;
  currentAlgorithm: { name: string; active: boolean }[];
  inputRef: React.Ref<HTMLInputElement>;
  rangeRef: React.Ref<HTMLInputElement>;
  rangeRefStart: React.Ref<HTMLInputElement>;
  speedRef: React.Ref<HTMLInputElement>;
  comparisonRef: React.Ref<HTMLInputElement>;
  animRunning: boolean;
}
function NavMain(props: Props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="w-100"
    >
      <Container className="">
        <Title />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <AlgorithmDropDown
              currentAlgorithm={props.currentAlgorithm}
              currentAlgorithmUpdate={props.currentAlgorithmUpdate}
              animRunning={props.animRunning}
            />
            <CurrentAlgorithm inputRef={props.inputRef} />
            <AmountOfBarsSlider
              currentAmountOfDivs={props.currentAmountOfDivs}
              inputRef={props.inputRef}
              rangeRef={props.rangeRef}
              rangeRefStart={props.rangeRefStart}
              animRunning={props.animRunning}
            />
            <VisualisationSpeedSlider
              speedRef={props.speedRef}
              animRunning={props.animRunning}
              currentSpeed={props.currentSpeed}
            />
            <StartButton
              animRunning={props.animRunning}
              sortDivs={props.sortDivs}
            />
            <AlgorithmComparisons comparisonRef={props.comparisonRef} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;
