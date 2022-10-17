import React from "react";

interface Props {
  randomHeights: number[];
}

function DivContainer(props: Props) {
  return (
    <div id="maindiv">
      {props.randomHeights.map((element, id) => (
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
  );
}

export default DivContainer;
