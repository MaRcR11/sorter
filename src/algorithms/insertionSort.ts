import sleep from "../helpers/asyncSetTimeout";

const insertionSort = async ({
  randomHeights,
  setRandomHeights,
  visualizationSpeed,
  setAnimRunning,
  comparisonsRef,
} = {}) => {
  let inputArr = randomHeights;
  let comps = 0;
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      comps++;
      setRandomHeights([...randomHeights, inputArr]);
      comparisonsRef.current.value = `Comparisons: ${comps}`;

      await sleep(visualizationSpeed);

      j--;
    }
    inputArr[j + 1] = current;
    comps++;

    setRandomHeights([...randomHeights, inputArr]);
    comparisonsRef.current.value = `Comparisons: ${comps}`;
  }
  setAnimRunning(false);
};

export default insertionSort;
