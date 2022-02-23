let divs = document.getElementsByTagName("div"), i=divs.length;
let allHeights = []


const quicksort = ([head, ...tail]) => head === undefined ? [] : 
  [...quicksort([...tail.filter(a => a <= head)]), head, ...quicksort([...tail.filter(a => a > head)])];

  function randomHeight(){
    return Math.random() *window.innerHeight / 2
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

while (i--) {
    if(divs[i].className != "maindiv"){
    divs[i].style.height = `${randomHeight()}px`
    allHeights.push(divs[i].style.height)
    }
    }


allHeights = (((allHeights.toString()).replace(/px/gm, "")).replace(/,/gm, " ")).split(" ")



allHeights.forEach((v, i, a)=> {
    allHeights[i] = parseInt(allHeights[i])
})

let unsortedallHeights = allHeights

// allHeights = quicksort(allHeights)

// setTimeout( async () => {
//     for(let i = 0; i < divs.length; i++){
//         if(divs[i].className != "maindiv"){
//         // console.log(divs[i].style.height, allHeights[i-1], i)
//         await sleep(1)
//         divs[i].style.height = `${allHeights[i-1]}px`
//         }
//     }
// },1000)





  console.log(allHeights.length, divs)



const bubbleSort = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1] && divs[i].className != "maindiv") {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          await sleep(1)
          console.log("yeah")
          divs[j].style.height = `${arr[j]}px`
          divs[j+1].style.height = `${tmp}px`
      
        }
      }
    }
    return arr;
  }

  bubbleSort(unsortedallHeights)
// console.log(bubbleSort(unsortedallHeights))


