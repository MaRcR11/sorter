const bubbleSort = (randomHeights, setRandomHeights): any => {
  var newArr = [...randomHeights];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j].height > newArr[j + 1]?.height) {
        let tmp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = tmp;
        setRandomHeights(newArr);
      }
    }
  }
};

const quickSort = ([head, ...tail]): any =>
  head === undefined
    ? []
    : [
        ...quickSort([...tail.filter((a) => a <= head)]),
        head,
        ...quickSort([...tail.filter((a) => a > head)]),
      ];

export default { bubbleSort, quickSort };
