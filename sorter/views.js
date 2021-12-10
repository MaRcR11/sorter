

const dropdown_arrow = document.getElementById("dropwdown-arrow")
const nav = document.getElementById("nav")
const maindivBackground = document.getElementById("maindiv").style
console.log(divs)

let timesCicked = 1


function arrowClicked(){
    if(timesCicked % 2 === 0){
    nav.style.height = `3em`
    for(let i =0; i < divs.length; i++){
        divs[i].style.display = "block"
        divs[i].style.display = "block"44
    }
    
    }
    else{
    nav.style.height = `${window.innerHeight}px`
    for(let i =0; i < divs.length; i++){

        divs[i].style.display = "none"
    }
    // dropdown_arrow.src = "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-down-arrow-arrows-dreamstale-lineal-dreamstale-2.png"
    }
    timesCicked++
}

// https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-down-arrow-arrows-dreamstale-lineal-dreamstale-2.png