let lastOperand = 0;
let operation = null;

const display = document.getElementById('display');
const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
});

function number(n){return document.getElementById('btn_'+n).addEventListener('click', function () {
    inputWindow.value +=n;
    inputWindow.value = parseInt(inputWindow.value, 10)})
};

number (0);
number (1);
number (2);
number (3);
number (4);
number (5);
number (6);
number (7);
number (8);
number (9);

document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "plus";
    inputWindow.value = 0;
});
document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "minus";
    inputWindow.value =  0;
});
document.getElementById('btn_times').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "times";
    inputWindow.value = 0;
});
document.getElementById('btn_diveded').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "diveded";
    inputWindow.value = 0;
});
document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "root";
    inputWindow.value = "sqrt("+ lastOperand+")";
 });
document.getElementById('btn_realNumber').addEventListener('click', function () {
 	 lastOperand = parseFloat(inputWindow.value);
    operation = "realNumber";
    inputWindow.value = lastOperand/10; 
 });
document.getElementById('btn_minusNumber').addEventListener('click', function () {
 	 lastOperand = parseFloat(inputWindow.value);
    operation = "minusNumber";
    inputWindow.value = -lastOperand; 
 });

document.getElementById('btn_calc').addEventListener('click', function () {
    	if (operation === "plus"){
	    	const result1= lastOperand + "+" + parseFloat(inputWindow.value);
	    	const result= lastOperand + parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;	
	    	display.value = result1+ "=" + result;
	    }
    	if (operation === "minus"){
	    	const result1= lastOperand + "-" + parseFloat(inputWindow.value);
	    	const result= lastOperand - parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
			display.value = result1+ "=" + result;
	    }
    	if (operation === "times"){
    		const result1= lastOperand + "*" + parseFloat(inputWindow.value);
	    	const result= lastOperand * parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
			display.value = result1+ "=" + result;	    }
    	if (operation === "diveded"){
    		const result1= lastOperand + "/" + parseFloat(inputWindow.value);
	    	const result= lastOperand / parseFloat(inputWindow.value);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
	    	display.value = result1+ "=" + result;
	    }
    	if (operation === "root"){
    		const result1="sqrt("+ lastOperand+")";
	    	const result= Math.sqrt(lastOperand);
	    	operation - null;
	    	lastOperand = 0;
	    	inputWindow.value = result;
	    	display.value = result1+ "=" + result;
	    }   
});



