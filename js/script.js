function getHistory() {
	return document.getElementById("history-value").innerText;
}

function printHistory(num) {
	document.getElementById("history-value").innerText = num;
}

function getOutput() {
	return document.getElementById("output-value").innerText;
}

function printOutput(num) {
	if (num == "") {
		document.getElementById("output-value").innerText = num;
	}
	else {
		document.getElementById("output-value").innerText = num;
	}
}

function getFormattedNumber(num) {
	if (num == "-") {
		return "";
	}
	var n = Number(num);
	var v = n.toLocaleString("en");
	return v;
}

function reverseNumberFormat(num) {
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function() {
		if (this.id == "clear") {
			printHistory("");
			printOutput("");
		}
		
		else {
			var output = getOutput();
			var history1 = getHistory();
			if (output == "" && history1 != "") {
				if (isNaN(history1[history1.length - 1])) {
					history1 = history1.substr(0, history1.length -1);
				}
			}
			
			if (output != "" || history1 != "") {
				output = output == ""?output:reverseNumberFormat(output);
				history1 += output;
				
				if (this.id == "=") {
					var r = eval(history1);
					printOutput(r);
					printHistory("");
				}
				else {
					history1 += this.id;
					printHistory(history1);
					printOutput("");
				}
			}
		}
	});
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function() {
		var output = reverseNumberFormat(getOutput());
		if (output != NaN) {
			output += this.id;
			printOutput(output);
		}
	});
}