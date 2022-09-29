import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function NavMenu() {

    const inputRef = useRef(null);
    const rangeRef = useRef(null);
    const speedRef = useRef(null);
    function currentAlgorithm(e: any) {
        console.log(e.target.innerText)


        // @ts-ignore
        inputRef.current.value = e.target.innerText


    }

    function currentAmountofDivs(e: any){

        // @ts-ignore
        e.target.title = rangeRef.current.value = `Amount of bars: ${e.target.value}`
    }

    function currentSpeed(e: any){
        // @ts-ignore
        e.target.title = speedRef.current.value = `Speed: ${e.target.value}`
    }

    return (
        <div className="d-flex">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100">
                <Container className="">
                    <Navbar.Brand href="#home">Sorter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown  title="Choose Algorithm" id="collasible-nav-dropdown">
                                <div onClick={currentAlgorithm}>
                                    <NavDropdown.Item  id="bubblesort"  >Bubble Sort</NavDropdown.Item>
                                    <NavDropdown.Item  id="selectionsort"  >Selection Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="insertionsort"> Insertion Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="mergesort" >Merge Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="quicksort" >Quicksort</NavDropdown.Item>
                                    <NavDropdown.Item id="countingsort" >Counting Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="radixsort" > Radix Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="bucketsort" >Bucket Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="heapsort" >Heap Sort</NavDropdown.Item>
                                    <NavDropdown.Item id="shellsort" >Shell Sort</NavDropdown.Item>
                                </div>
                            </NavDropdown>

                            <input ref={inputRef} defaultValue="Bubble Sort" id="currentAlgorithmForm" className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center" type="text" placeholder="" disabled/>
                            <input onChange={currentAmountofDivs} data-placement="top" title="Amount of bars: 125" type="range" className="form-range m-lg-2" id="customRange" min="2" max="250" defaultValue="125"/>
                            <input ref={rangeRef} defaultValue="Amount of bars: 125" id="currentAlgorithmForm" className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center" type="text" placeholder="" disabled/>

                            <input onChange={currentSpeed}  data-placement="top" title="Speed: 5" type="range" className="form-range m-lg-2" id="customRange2" min="1" max="5" defaultValue="5"/>
                            <input ref={speedRef} defaultValue="Speed: 5" id="currentAlgorithmForm" className="form-control shadow-none bg-dark border-0 user-select-all text-primary text-center" type="text" placeholder="" disabled/>

                            <button type="button"  className="btn btn-outline-primary">Sort!</button>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div>


    );
}

export default NavMenu;