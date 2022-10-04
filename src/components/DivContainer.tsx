import React, { createElement, useState } from "react";
import "../styles/DivContainer.css";

function DivContainer() {
  function randomHeight() {
    return Math.random() * 450;
  }

  function createCurrentAmountofDivs() {
    console.log("he");
    var maindiv = document.getElementById("maindiv");

    var element = document.createElement("div");

    element.style.width = "5px";
    element.style.height = `${randomHeight()}`;

    // @ts-ignore
    maindiv.appendChild(element);
  }

  return <div></div>;
}

export default DivContainer;

{
  /*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/
}
{
  /*    <div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/
}
{
  /*    <div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/
}
{
  /*    <div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/
}
{
  /*    <div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/
}
{
  /*<div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/
}

<div onClick={currentAlgorithmUpdate}>
  {currentAlgorithm.map((sortAlg, index) => {
    <li id={index}>{123}</li>;
    console.log(sortAlg.name);
  })}
</div>;

const [currentAlgorithm, setCurrentAlgorithm] = useState([
  { name: "Bubble Sort", active: true },
  { name: "Selection Sort", active: true },
  { name: "Insertion Sort", active: true },
  { name: "Counting Sort", active: true },
  { name: "Quick Sort", active: true },
  { name: "Counting Sort", active: true },
  { name: "Radix Sort", active: true },
  { name: "Bucket Sort", active: true },
  { name: "Heap Sort", active: true },
  { name: "Shell Sort", active: true },
]);
