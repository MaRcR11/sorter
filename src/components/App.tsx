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
import Title from "./Nav/Title";
import DivContainer from "./DivContainer/DivContainer";
import NavMain from "./Nav/NavMain";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const speedRef = useRef<HTMLInputElement>(null);
  const comparisonsRef = useRef<HTMLInputElement>(null);
  const rangeRefStart = useRef<HTMLInputElement>(null);
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

  function currentSpeed(e: React.ChangeEvent<HTMLInputElement>) {
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
      <NavMain
        sortDivs={sortDivs}
        currentSpeed={currentSpeed}
        currentAlgorithmUpdate={currentAlgorithmUpdate}
        currentAlgorithm={currentAlgorithm}
        inputRef={inputRef}
        currentAmountOfDivs={currentAmountofDivs}
        rangeRef={rangeRef}
        rangeRefStart={rangeRefStart}
        animRunning={animRunning}
        speedRef={speedRef}
        comparisonRef={comparisonsRef}
      />
      <DivContainer randomHeights={randomHeights} />
    </div>
  );
}

export default App;
