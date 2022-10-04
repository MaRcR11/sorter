import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/DivContainer.css";
import { bubbleSort, quickSort } from "../sortingAlgs";

function NavMenu() {
  const inputRef = useRef(null);
  const rangeRef = useRef(null);
  const speedRef = useRef(null);
  const rangeRefStart = useRef(null);
  const [randomHeights, setRandomHeights] = useState([]);
  const [currentAlgorithm, setCurrentAlgorithm] = useState([
    { name: "Bubble Sort", active: true },
    { name: "Selection Sort", active: false },
    { name: "Insertion Sort", active: false },
    { name: "Counting Sort", active: false },
    { name: "Quick Sort", active: false },
    { name: "Counting Sort", active: false },
    { name: "Radix Sort", active: false },
    { name: "Bucket Sort", active: false },
    { name: "Heap Sort", active: false },
    { name: "Shell Sort", active: false },
  ]);

  function randomHeight(): number {
    return Math.random() * 450;
  }

  function currentAlgorithmUpdate(e: any) {
    // @ts-ignore
    inputRef.current.value = e.target.innerText;
    currentAlgorithm;
  }

  function updateDivs(range: any) {
    for (let i = 0; i < range; i++) {
      setRandomHeights((prevState) => [
        ...prevState,
        { id: i, height: randomHeight() },
      ]);
    }
  }
  useEffect(() => {
    setRandomHeights([]);
    updateDivs(rangeRefStart.current.value);
  }, []);

  function currentAmountofDivs(e: any) {
    setRandomHeights([]);
    updateDivs(e.target.value);

    // @ts-ignore
    e.target.title =
      rangeRef.current.value = `Amount of bars: ${e.target.value}`;
  }

  function currentSpeed(e: any) {
    // @ts-ignore
    e.target.title = speedRef.current.value = `Speed: ${e.target.value}`;
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  var speed = 1000 / 60;

  const sortDivs = async () => {
    var newArr = [...randomHeights];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length - i; j++) {
        if (newArr[j].height > newArr[j + 1]?.height) {
          let tmp = newArr[j];
          newArr[j] = newArr[j + 1];
          newArr[j + 1] = tmp;
          setRandomHeights(newArr);
          await sleep(speed);
        }
      }
    }
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
                min="2"
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
                title="Speed: 5"
                type="range"
                className="form-range m-lg-2"
                id="customRange2"
                min="1"
                max="5"
                defaultValue="5"
              />
              <input
                ref={speedRef}
                defaultValue="Speed: 5"
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
        {randomHeights.map((element) => (
          <div
            key={element.id}
            style={{ height: `${element.height}px`, width: "5px" }}
            className="div bg-dark"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
