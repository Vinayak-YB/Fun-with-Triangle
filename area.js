const sides = document.getElementsByClassName("side-input");
const areaBtn = document.getElementById("area-btn");
const outputEl = document.getElementById("output");

function calculateArea(){
    if(sides[0].value>0 && sides[1].value>0){
    const area = findArea(sides[0].value,sides[1].value);
    console.log(area);
    outputEl.innerText="Area calculated is " + area;
    }
    else{
        outputEl.innerText="The inputs must be greater than 0."
    }
}
function findArea(a,b){
    const area = 0.5 * a * b;
    return area;
}
areaBtn.addEventListener("click", calculateArea);