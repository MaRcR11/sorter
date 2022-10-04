import React, {createElement} from 'react';
import "./DivContainer.css"


function DivContainer() {

    function randomHeight(){
        return Math.random() *450
    }

    function createCurrentAmountofDivs(){
        console.log("he")
        var maindiv = document.getElementById("maindiv")

        var element = document.createElement("div")

        element.style.width = "5px"
        element.style.height = `${randomHeight()}`

        // @ts-ignore
        maindiv.appendChild(element)
    }





    return (
        <div></div>
)
}

export default DivContainer;



{/*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/}
{/*    <div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/}
{/*    <div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/}
{/*    <div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/}
{/*    <div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/}
{/*<div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "450px", width: "5px", zIndex:"-1"}}/>*/}
{/*<div className="div bg-dark" style={{height: "20px",width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "30px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "40px", width: "5px"}}/>*/}
{/*<div className="div bg-dark" style={{height: "10px", width: "5px"}}/>*/}