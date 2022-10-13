import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/DivContainer.css";

function NavMenu() {
  const inputRef = useRef(null);
  const rangeRef = useRef(null);
  const speedRef = useRef(null);
  const rangeRefStart = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [iSortDiv, setISortDiv] = useState(0);
  const [jSortDiv, setJSortDiv] = useState(0);
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

  useEffect(() => {
    setRandomHeights();
  }, [iSortDiv, jSortDiv]);

  function randomHeight(): number {
    return Math.random() * 450;
  }

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
    for (let i = 0; i < range; i++)
      setRandomHeights((prevState) => [...prevState, randomHeight()]);

    console.log(randomHeights);
  }

  useEffect(() => {
    updateDivs(rangeRefStart.current.value);
  }, []);

  function currentAmountofDivs(e: any) {
    updateDivs(e.target.value);

    // @ts-ignore
    e.target.title =
      rangeRef.current.value = `Amount of bars: ${e.target.value}`;
  }

  function currentSpeed(e: any) {
    let speeds = [100, 10, 1];
    setAnimationSpeed(speeds[e.target.value - 1]);
    console.log(e.target.value);

    // @ts-ignore
    e.target.title = speedRef.current.value = `Speed: ${e.target.value}`;
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  //algs...
  const insertionSort = async () => {
    let inputArr = randomHeights;

    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current < inputArr[j]) {
        inputArr[j + 1] = inputArr[j];
        setRandomHeights([...randomHeights, inputArr]);
        await sleep(animationSpeed);

        j--;
      }
      inputArr[j + 1] = current;
      setRandomHeights([...randomHeights, inputArr]);

      await sleep(animationSpeed);
    }
  };

  const bubbleSort = async () => {
    let currentArr = randomHeights;

    for (let i = 0; i < currentArr.length - 1; i++) {
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        if (currentArr[j] > currentArr[j + 1]) {
          let temp = currentArr[j];
          currentArr[j] = currentArr[j + 1];
          currentArr[j + 1] = temp;
          setRandomHeights([...randomHeights, currentArr]);
          await sleep(animationSpeed);
        }
      }
    }
    console.log(randomHeights);
  };

  const selectionSort = async () => {
    let inputArr = randomHeights;
    let n = randomHeights.length;

    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (inputArr[j] < inputArr[min]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
        setRandomHeights([...randomHeights, inputArr]);
        await sleep(animationSpeed);
      }
    }
  };

  const algorithms = [bubbleSort, selectionSort, insertionSort];

  const sortDivs = () => {
    console.log(animationSpeed);
    currentAlgorithm.map((e, i) => {
      if (e.active) algorithms[i]();
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
              >
                Sort!
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="maindiv">
        {randomHeights &&
          randomHeights.map((element, id) => (
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

export default NavMenu;
