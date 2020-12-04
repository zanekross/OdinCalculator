const screen = document.querySelector('#screen');
const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
const pointButton = document.querySelector('#pointButton');
const backButton = document.querySelector('#backspace');

let heldValue = null;
let heldOperator = null;
let lastnum = null;
let pendingNum = false;

clearButton.addEventListener('click', function () {
	reset();
})

const functionalButtons = document.querySelectorAll('.functional');

numberButtons.forEach(element => {
	element.addEventListener('click', function(e) {
		lastnum = true;
		if (screen.textContent == heldValue) {
			//reset();
			screen.textContent = e.target.firstChild.textContent;
			screen.textContent = screen.textContent.replace(/\s+/g, "");
		}
		
		else {
		screen.textContent += e.target.firstChild.textContent;
		screen.textContent = screen.textContent.replace(/\s+/g, "");
		}
	})
});

/*functionalButtons.forEach(element => {
	element.addEventListener('click', function(e) {
		if (lastnum) {
			lastnum = false;
			if (screen.textContent != '') {
				console.log('heldValue: ' + heldValue + 'heldOperator: ' + heldOperator);
				if (heldValue != null && heldOperator != null && screen.textContent != heldValue) {
					equals();
					lastnum = true;
					heldOperator = null;
				}
				else if (heldValue == null || screen.textContent == heldValue) {
					heldValue = parseInt(screen.textContent);
					screen.textContent = '';
					heldOperator = e.target.firstChild.textContent;
				}
			}
		}
	})
});*/

functionalButtons.forEach(element => {
	element.addEventListener('click', function(e) {
		if (!isNaN(parseFloat(screen.textContent))) {

			if (heldValue != null && heldOperator != null) {
				equals(false);
				heldOperator = e.target.textContent;
				console.log(heldOperator);
				pendingNum = true
			}

			else if (heldValue == null || heldOperator == null) {
				heldValue =  parseFloat(screen.textContent);
				screen.textContent = '';
				heldOperator = e.target.textContent;
			}

		}
	})
});


function equals(equalsPressed) {
	if (heldOperator != null && heldValue != null && !isNaN(parseFloat(screen.textContent))) {
		let result = operate(heldValue, heldOperator, screen.textContent);
		screen.textContent = result;
		heldValue = result;
		heldOperator = null;
		lastnum = true;
		console.log(result);
	}

	if (equalsPressed) {
		heldOperator = null;
	}
}

function operate(x, operator, y ) {
	let opresult = null;
	console.log('');
	switch(operator) {
		case '+' :
			opresult = parseFloat(x) + parseFloat(y);
			console.log('Switch called');
			break;
		case '-' :
			opresult = parseFloat(x) - parseFloat(y);
			console.log('Switch called');
			break;
		case '/' :
			if (parseFloat(y) == 0) {
				opresult = "Can't Divide 0";
			}
			opresult = parseFloat(x) / parseFloat(y);
			console.log('Switch called');
			break;

		case '*' :
			opresult = parseFloat(x) * parseFloat(y);
			console.log('Switch called');
			break;
	}

	if (isInt(opresult) == false) {
		opresult = opresult.toFixed(2);
	}

	return opresult;
}

function reset() {
	screen.textContent = '';
	heldValue = null;
	heldOperator = null;
	lastnum = null;
}

equalsButton.addEventListener('click', function() {
	equals(true);
});

backButton.addEventListener('click', backSpace);

pointButton.addEventListener('click', function(e) {
	if (screen.textContent.search(/\./) == -1 ) {
		screen.textContent += e.target.firstChild.textContent;
		screen.textContent = screen.textContent.replace(/\s+/g, "");
	}

})

function isInt (n) {
	return n % 1 === 0;
}

function backSpace() {
	screen.textContent = screen.textContent.slice(0, -1); 
}