import React from "react";
import randomHeight from "../../helpers/randomizeArray";

interface Props {
  randomHeights: number[];
}

function DivContainer(props: Props) {
  console.log(document.body.clientWidth, props.randomHeights.length * 3);
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
