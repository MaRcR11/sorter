import returnStates from "./components/App";

export function bubbleSort(
  randomHeights: number[],
  iSortDiv: number,
  jSortDiv: number
) {
  var newArr = [...randomHeights];

  for (iSortDiv; iSortDiv < newArr.length; iSortDiv++) {
    for (jSortDiv; jSortDiv < newArr.length - iSortDiv; jSortDiv++) {
      if (newArr[jSortDiv].height > newArr[jSortDiv + 1]?.height) {
        let tmp = newArr[jSortDiv];
        newArr[jSortDiv] = newArr[jSortDiv + 1];
        newArr[jSortDiv + 1] = tmp;
        return newArr;
      }
    }
  }
  return newArr;
}

export const quickSort = ([head, ...tail]: number[]): number[] =>
  head === undefined
    ? []
    : [
        ...quickSort([...tail.filter((a) => a <= head)]),
        head,
        ...quickSort([...tail.filter((a) => a > head)]),
      ];

export const selectionSort = (arr: number[]): number[] => {
  let min: number;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swapTwo(arr, min, i);
    }
  }
  return arr;
};

export function insertionSort(inputArr: number[]) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex + rIndex < left.length + right.length) {
    const lItem = left[lIndex];
    const rItem = right[rIndex];

    if (lItem == null) {
      array.push(rItem);
      rIndex++;
    } else if (rItem == null) {
      array.push(lItem);
      lIndex++;
    } else if (lItem < rItem) {
      array.push(lItem);
      lIndex++;
    } else {
      array.push(rItem);
      rIndex++;
    }
  }

  return array;
}

export function countingSort(arr: number[]) {
  return arr
    .reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), [])
    .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
}

export function radixSort(arrOfNums: number[]) {
  let maxDigitCount = mostDigits(arrOfNums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // [[], [], [],...]
    for (let i = 0; i < arrOfNums.length; i++) {
      let digit = getDigit(arrOfNums[i], k);
      digitBuckets[digit].push(arrOfNums[i]);
    }
    // New order after each loop
    arrOfNums = [].concat(...digitBuckets);
  }
  return arrOfNums;
}

export function heapSort(arr: number[]) {
  var N = arr.length;

  // Build heap (rearrange array)
  for (var i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);

  // One by one extract an element from heap
  for (var i = N - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr: number[], N: number, i: number) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest);
  }
}

export function shellSort(arr: number[]) {
  let n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
}

export const bucketSort = (arr: number[], size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};
