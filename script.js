const screen = document.querySelector('#screen');

const numberButtons = document.querySelectorAll('.number-button');

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', function () {
	screen.textContent = '';
})

const functionalButtons = document.querySelectorAll('.functional');

numberButtons.forEach(element => {
	element.addEventListener('click', function(e) {
		screen.textContent += e.target.textContent;
	})
});

functionalButtons.forEach(element => {
	element.addEventListener('click', function(e) {
		screen.textContent += e.target.textContent;
	})
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', function operate() {
	splitEquation = screen.textContent.split('+');
	console.table(splitEquation);
});

const add = function(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
}

const sum = function(args) {
	let result = 0;
	args.forEach(arg => {
		result = result + arg;
	});
	return result;
}

const multiply = function(args) {
	let result = 0;
	if (args.length != 0) {
		result = 1;
	}
	args.forEach(arg => {
		result = result * arg;
	});
	return result;
}

const power = function(x, y) {
	let result = 1;
	for (i = 0; i < y; i++) {
		result = result * x;
	}
	return result;
}




/*function factorial(fact) {
	result = 1;
	for(i = fact; i > 0; i--) {
		result = result * i;
	}
	return result;
}*/