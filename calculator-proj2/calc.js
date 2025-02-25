document.addEventListener("DOMContentLoaded", function () {
    let output = document.getElementById("output");
    let buttons = document.querySelectorAll("button");
    let historyBtn = document.querySelector(".history");
    let historyList = [];

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            let buttonText = this.innerText;

            if (this === historyBtn) {
                event.preventDefault(); 
                alert("History:\n" + historyList.join("\n"));
                return; 
            }

            if (buttonText === "AC") {
                output.value = "";
            } else if (buttonText === "⌫") {
                output.value = output.value.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    let expression = output.value.replace("÷", "/").replace("X", "*");
                    let result = eval(expression);
                    historyList.push(`${expression} = ${result}`);
                    if (historyList.length > 10) historyList.shift();
                    output.value = result;
                } catch {
                    output.value = "Error";
                }
            } else if (buttonText === "%") {
                output.value = parseFloat(output.value) / 100;
            } else if (buttonText === "sin") {
                output.value = Math.sin(toRadians(parseFloat(output.value)));
            } else if (buttonText === "cos") {
                output.value = Math.cos(toRadians(parseFloat(output.value)));
            } else if (buttonText === "tan") {
                output.value = Math.tan(toRadians(parseFloat(output.value)));
            } else if (buttonText === "log") {
                output.value = Math.log10(parseFloat(output.value));
            } else if (buttonText === "ln") {
                output.value = Math.log(parseFloat(output.value));
            } else if (buttonText === "√") {
                output.value = Math.sqrt(parseFloat(output.value));
            } else if (buttonText === "π") {
                output.value += Math.PI;
            } else if (buttonText === "e") {
                output.value += Math.E;
            } else if (buttonText === "e^x") {
                output.value = Math.exp(parseFloat(output.value));
            } else if (buttonText === "x²") {
                output.value = Math.pow(parseFloat(output.value), 2);
            } else if (buttonText === "^") {
                output.value += "**";
            } else if (buttonText === "!") {
                output.value = factorial(parseInt(output.value));
            } else {
                output.value += buttonText;
            }
        });
    });

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
});
