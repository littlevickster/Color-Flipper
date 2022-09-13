const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function() {

const randomNumber = getRandomNumber();
console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    //^^Returns a value between 0 and 1
    //We would multiply this random value by the amount of values in the array
    //Math.floor rounds the product of the first operation down
}