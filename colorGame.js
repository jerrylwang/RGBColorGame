var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	};
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";

	};
});



resetButton.addEventListener("click", function(){
	//generate all new colors
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	};
	h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;





for(var i = 0; i< squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	console.log(colors);
	console.log(squares[i]);
	//add click listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;

		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}		
	});
}


function changeColors(color){
	//loop throught all squares
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;	

	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num){
	//make an array
	var array = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		array.push(randomColor());
	};
	//return the array 
	return array;
}

function randomColor(){

	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b + ")";
	
}
