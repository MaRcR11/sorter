import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/App.css";
import randomHeight from "../helpers/randomizeArray";
import bubbleSort from "../algorithms/bubbleSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";

function App() {
  const inputRef = useRef(null);
  const rangeRef = useRef(null);
  const speedRef = useRef(null);
  const comparisonsRef = useRef(null);
  const rangeRefStart = useRef(null);
  const [visualizationSpeed, setVisualizationSpeed] = useState(1);
  const [animRunning, setAnimRunning] = useState(false);
  const [randomHeights, setRandomHeights] = useState<number[]>([]);
  const [currentAlgorithm, setCurrentAlgorithm] = useState([
    { name: "Bubble Sort", active: true },
    { name: "Selection Sort", active: false },
    { name: "Insertion Sort", active: false },
    { name: "Counting Sort", active: false },
    { name: "Quick Sort", active: false },
    { name: "Radix Sort", active: false },
    { name: "Bucket Sort", active: false },
    { name: "Heap Sort", active: false },
    { name: "Shell Sort", active: false },
    { name: "Merge Sort", active: false },
  ]);
  const algorithms = [bubbleSort, selectionSort, insertionSort];
  let comps = 0;

  function currentAlgorithmUpdate(e: any) {
    // @ts-ignore
    inputRef.current.value = e.target.innerText;
    var newArr = [...currentAlgorithm];

    newArr.map((element, index) => {
      element.name === e.target.innerText
        ? (newArr[index].active = true)
        : (newArr[index].active = false);
    });
    setCurrentAlgorithm(newArr);
    console.log(currentAlgorithm);
  }

  function updateDivs(range: any) {
    setRandomHeights([]);
    comparisonsRef.current.value = `Comparisons: ${comps}`;
    comps = 0;
    for (let i = 0; i < range; i++)
      setRandomHeights((prevState) => [...prevState, randomHeight()]);
  }

  useEffect(() => {
    updateDivs(rangeRefStart.current.value);
  }, []);

  function currentAmountofDivs(e: any) {
    setAnimRunning(false);

    updateDivs(e.target.value);

    // @ts-ignore
    e.target.title =
      rangeRef.current.value = `Amount of bars: ${e.target.value}`;
  }

  function currentSpeed(e: any) {
    let speeds = [100, 10, 1];
    setVisualizationSpeed(speeds[e.target.value - 1]);
    console.log(e.target.value);

    // @ts-ignore
    e.target.title = speedRef.current.value = `Speed: ${e.target.value}`;
  }

  const sortDivs = async () => {
    setAnimRunning(true);
    currentAlgorithm.map(async (e, i) => {
      if (e.active) {
        await algorithms[i]({
          randomHeights,
          setRandomHeights,
          visualizationSpeed,
          setAnimRunning,
          comparisonsRef,
        });
      }
    });
  };

  return (
    <div className="d-flex">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="w-100"
      >
        <Container className="">
          <Navbar.Brand href="#home">Sorter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Choose Algorithm"
                id="collasible-nav-dropdown"
              >
                <div onClick={currentAlgorithmUpdate}>
                  {currentAlgorithm.map((sortAlg, index) => (
                    <NavDropdown.Item key={`${index}`}>
                      {sortAlg.name}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>

              <input
                ref={inputRef}
                defaultValue="Bubble Sort"
                id="currentAlgorithmForm"
                className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
                type="text"
                placeholder=""
                disabled
              />
              <input
                ref={rangeRefStart}
                onChange={currentAmountofDivs}
                data-placement="top"
                title="Amount of bars: 125"
                type="range"
                className="form-range m-lg-2"
                id="customRange"
                min="4"
                max="250"
                defaultValue="125"
                disabled={animRunning}
              />
              <input
                ref={rangeRef}
                defaultValue="Amount of bars: 125"
                id="currentAlgorithmForm"
                className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
                type="text"
                placeholder=""
                disabled
              />

              <input
                onChange={currentSpeed}
                data-placement="top"
                title="Speed: 3"
                type="range"
                className="form-range m-lg-2"
                id="customRange2"
                min="1"
                max="3"
                defaultValue="3"
                disabled={animRunning}
              />
              <input
                ref={speedRef}
                defaultValue="Speed: 3"
                id="currentAlgorithmForm"
                className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
                type="text"
                placeholder=""
                disabled
              />

              <button
                onClick={sortDivs}
                type="button"
                className="btn btn-outline-primary"
                disabled={animRunning}
              >
                Sort!
              </button>
              <input
                ref={comparisonsRef}
                defaultValue="Comparisons: 0"
                id="currentAlgorithmForm"
                className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center"
                type="text"
                placeholder=""
                disabled
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="maindiv">
        {randomHeights.map((element, id) => (
          <div
            key={id}
            style={{
              height: `${element}px`,
              width: `${5}px`,
            }}
            className="div bg-dark"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
