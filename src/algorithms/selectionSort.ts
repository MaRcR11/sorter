import sleep from "../helpers/asyncSetTimeout";
import React from "react";

const selectionSort = async ({
  randomHeights,
  setRandomHeights,
  visualizationSpeed,
  setAnimRunning,
  comparisonsRef,
  setIsSorted,
}: {
  randomHeights: number[];
  setRandomHeights: React.ComponentState;
  visualizationSpeed: number;
  setAnimRunning: React.ComponentState;
  comparisonsRef: any;
  setIsSorted: React.ComponentState;
}) => {
  console.log(randomHeights);
  let comps = 0;
  let len = randomHeights.length;
  let array = randomHeights;
  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      await sleep(visualizationSpeed);
      if (array[minIndex] > array[j]) {
        minIndex = j;
        comps++;
        comparisonsRef.current.value = `Comparisons: ${comps}`;
      } else {
        comps++;
        comparisonsRef.current.value = `Comparisons: ${comps}`;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;

    setRandomHeights([...randomHeights, array]);
    console.log(i);
  }
  setAnimRunning(false);
  setIsSorted(true);
};

export default selectionSort;
