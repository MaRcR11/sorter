import sleep from "../helpers/asyncSetTimeout";

const bubbleSort = async ({
  randomHeights,
  setRandomHeights,
  visualizationSpeed,
  setAnimRunning,
  comparisonsRef,
} = {}) => {
  let comps = 0;
  let currentArr = randomHeights;
  for (let i = 0; i < currentArr.length - 1; i++) {
    for (let j = 0; j < currentArr.length - i - 1; j++) {
      if (currentArr[j] > currentArr[j + 1]) {
        let temp = currentArr[j];
        currentArr[j] = currentArr[j + 1];
        currentArr[j + 1] = temp;
        comps++;
        setRandomHeights([...randomHeights, currentArr]);
        comparisonsRef.current.value = `Comparisons: ${comps}`;
        await sleep(visualizationSpeed);
      } else {
        comps++;
        comparisonsRef.current.value = `Comparisons: ${comps}`;
      }
    }
  }
  setAnimRunning(false);
  console.log(comps);
};

export default bubbleSort;
