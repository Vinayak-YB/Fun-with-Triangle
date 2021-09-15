const sides = document.getElementsByClassName("side-input");
const hypotenuseBtn = document.getElementById("hypotenuse-btn");
const outputEl = document.getElementById("output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse() {
    if(Number(sides[0].value)>0 && Number(sides[1].value)){

    const sumOfSquares=calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    console.log(lengthOfHypotenuse);
    outputEl.innerText="The length of the hypotenuse is " + lengthOfHypotenuse;
    }
    else{
        outputEl.innerText="Enter input greater than 0";
    }
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);