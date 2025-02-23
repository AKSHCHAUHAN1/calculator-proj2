document.addEventListener("DOMContentLoaded", function() {
    var output = document.getElementById("output");
    var buttons = document.querySelectorAll("button");

     buttons.forEach(button => {
        button.addEventListener("click", function () {
            let buttonText = this.innerText;

            if (buttonText === "AC") {
                output.value = "";
            } else if (buttonText === "⌫") {
                output.value = output.value.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    output.value = eval(output.value.replace("÷", "/").replace("X", "*"));
                } catch {
                    output.value = "Error";
                }
            } else if (buttonText === "%") {
                output.value = parseFloat(output.value) / 100;
            } else if (buttonText === "sin") {
                output.value = Math.sin(toRadians(output.value));
            } else if (buttonText === "cos") {
                output.value = Math.cos(toRadians(output.value));
            } else if (buttonText === "tan") {
                output.value = Math.tan(toRadians(output.value));
            } else if (buttonText === "log") {
                output.value = Math.log10(output.value);
            } else if (buttonText === "ln") {
                output.value = Math.log(output.value);
            } else if (buttonText === "√") {
                output.value = Math.sqrt(output.value);
            } else if (buttonText === "π") {
                output.value += Math.PI;
            } else if (buttonText === "e") {
                output.value += Math.E;
            } else if (buttonText === "e^x") {
                output.value = Math.exp(output.value);
            } else if (buttonText === "x²") {
                output.value = Math.pow(output.value, 2);
            } else if (buttonText === "^") {
                output.value += "**";
            } else {
                output.value += buttonText;
            }
        });
    });
});


// Yeh function degrees ko radians mein convert karta hai
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
