const inputs = document.getElementsByClassName("angle-input");
const isTriangleBtn = document.getElementById("is-triangle-btn");
const outputEl = document.getElementById("output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        console.log("Angles form a triangle");
        outputEl.innerText="Yay! The Angles form a triangle."
    }
    else{
        console.log("Angles do not form a triangle");
        outputEl.innerText="Oh! Nope, Angles do not form a triangle";
    }
}
isTriangleBtn.addEventListener("click", isTriangle );