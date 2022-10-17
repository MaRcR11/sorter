import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import randomHeight from "../helpers/randomizeArray";
import bubbleSort from "../algorithms/bubbleSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";
import DivContainer from "./DivContainer/DivContainer";
import NavMain from "./Nav/NavMain";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const speedRef = useRef<HTMLInputElement>(null);
  const comparisonsRef = useRef<HTMLInputElement>(null);
  const rangeRefStart = useRef<HTMLInputElement>(null);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1);
  const [animRunning, setAnimRunning] = useState<boolean>(false);
  const [randomHeights, setRandomHeights] = useState<number[]>([]);
  const [currentAlgorithm, setCurrentAlgorithm] = useState<
    { name: string; active: boolean }[]
  >([
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
    if (inputRef.current === null) return;
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
    if (comparisonsRef.current === null) return;

    setRandomHeights([]);
    comparisonsRef.current.value = `Comparisons: ${comps}`;
    comps = 0;
    for (let i = 0; i < range; i++)
      setRandomHeights((prevState) => [...prevState, randomHeight()]);
  }

  useEffect(() => {
    if (rangeRefStart.current === null) return;

    updateDivs(rangeRefStart.current.value);
  }, []);

  function currentAmountofDivs(e: any) {
    if (rangeRef.current === null) return;

    setAnimRunning(false);

    updateDivs(e.target.value);

    e.target.title =
      rangeRef.current.value = `Amount of bars: ${e.target.value}`;
  }

  function currentSpeed(e: React.ChangeEvent<HTMLInputElement>) {
    if (speedRef.current === null) return;

    let speeds = [100, 10, 1];
    setVisualizationSpeed(speeds[parseInt(e.target.value) - 1]);
    console.log(e.target.value);

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
