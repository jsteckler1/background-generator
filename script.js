// Get DOM elements
const gradient = document.getElementById('gradient');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const h3 = document.querySelector('h3');
const randomBtn = document.getElementById('random');

// Set initial color values
color1.value = '#FF0000';
color2.value = '#FFFF00';

// Set gradient colors to match either random or manual input
function setGradient(){
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    h3.textContent = gradient.style.background;
}

// Create a random hex code
function getRandom(){
    let codes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '';
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * codes.length);
        hex += codes[num];
    }
    return `#${hex}`;
};

// Set color picker values to random and set gradient
function generateRandomColors() {
    color1.value = getRandom();
    color2.value = getRandom();
    setGradient();
}

// Add gradient info to h3 text content on load
window.addEventListener('load', setGradient);

// Update gradient when color pickers change
color1.addEventListener('change', setGradient);
color2.addEventListener('change', setGradient);

// Set random gradient
randomBtn.addEventListener('click', generateRandomColors);


// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var bodyOriginal = getComputedStyle(body);
// var getOuterHTML = document.querySelector("input.color1.outerHTML");


// // var originalGradient = bodyOriginal.background;
// // var origColor1Value = color1.value;
// // var origColor2Value = color2.value;

// // console.log(origColor1Value);
// // console.log(origColor2Value);
// // console.log("background is: ", originalGradient);

// console.log(getOuterHTML);




// // function setOriginalGradient() {
// // 	color1.value = origColor1Value;
// // 	color2.value = origColor2Value;
// // }

// // console.log(origBackground);

// // function myScript() {
// // 	console.log(origBackground);
// // }

// function displayOriginalGradient() {
// 	css.textContent = bodyOriginal.background;
// 	// color1.value = 
// }

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }


// // color1.addEventListener("load", showOriginalGradient);

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);










// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// // console.log(css);
// // console.log(color1);
// // console.log(color2);
// // console.log(body);

// // click, mouseenter, keypress



// // color1.addEventListener("input", function() {
// // 	// console.log(color1.value);
// // 	// body.style.background = color1.value;
// // 	body.style.background = "linear-gradient(to right, " + color1.value
// // 	+ ", "
// // 	+ color2.value
// // 	+ ")";
// // })

// // color2.addEventListener("input", function() {
// // 	// console.log(color2.value);
// // 	body.style.background = "linear-gradient(to right, "
// // 	+ color1.value
// // 	+ ", "
// // 	+ color2.value
// // 	+ ")";
// // })


// function setGradient() {
// 	body.style.background = "linear-gradient(to right, " + color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }


// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);






























// // var css = document.querySelector("h3");
// // var color1 = document.querySelector(".color1");
// // var color2 = document.querySelector(".color2");
// // var body = document.getElementById("gradient");

// // function setGradient() {
// // 	body.style.background = 
// // 	"linear-gradient(to right, " 
// // 	+ color1.value 
// // 	+ ", " 
// // 	+ color2.value 
// // 	+ ")";

// // 	css.textContent = body.style.background + ";";
// // }

// // color1.addEventListener("input", setGradient);

// // color2.addEventListener("input", setGradient);