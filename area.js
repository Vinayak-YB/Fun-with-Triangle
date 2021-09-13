const sides = document.getElementsByClassName("side-input");
const areaBtn = document.getElementById("area-btn");
const outputEl = document.getElementById("output");

function calculateArea(){
    const area = findArea(sides[0].value,sides[1].value);
    console.log(area);
    outputEl.innerText="Area calculated is " + area;
}
function findArea(a,b){
    const area = 0.5 * a * b;
    return area;
}
areaBtn.addEventListener("click", calculateArea);