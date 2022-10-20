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
            width: `${Math.floor(
              document.body.clientWidth / (props.randomHeights.length * 3) >= 1
                ? document.body.clientWidth / (props.randomHeights.length * 3)
                : 1
            )}px`,
          }}
          className="div bg-dark"
        />
      ))}
    </div>
  );
}

export default DivContainer;
