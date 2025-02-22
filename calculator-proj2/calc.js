document.addEventListener("DOMContentLoaded", function() {
    var output = document.getElementById("output");
    var buttons = document.querySelectorAll("button");

    // Har button ke liye loop chala rahe hain
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var text = this.innerText; // Button ka text milta hai

            if (text === "AC") {
                // Screen saaf karo
                output.value = "";
            } else if (text === "⌫") {
                // Last character hatao
                output.value = output.value.slice(0, -1);
            } else if (text === "=") {
                // Expression ko evaluate karo
                try {
                    // '÷' ko '/' aur 'X' ko '*' se replace karo
                    var expr = output.value.replace(/÷/g, "/").replace(/X/g, "*");
                    output.value = eval(expr);
                } catch (e) {
                    output.value = "Error";
                }
            } else if (text === "%") {
                // Percentage calculate karo
                output.value = parseFloat(output.value) / 100;
            } else if (text === "sin") {
                // Sine nikalne ke liye angle ko radians mein convert karo
                output.value = Math.sin(toRadians(parseFloat(output.value)));
            } else if (text === "cos") {
                output.value = Math.cos(toRadians(parseFloat(output.value)));
            } else if (text === "tan") {
                output.value = Math.tan(toRadians(parseFloat(output.value)));
            } else if (text === "log") {
                output.value = Math.log10(parseFloat(output.value));
            } else if (text === "ln") {
                output.value = Math.log(parseFloat(output.value));
            } else if (text === "√") {
                output.value = Math.sqrt(parseFloat(output.value));
            } else if (text === "π") {
                // Pi ka value add karo
                output.value += Math.PI;
            } else if (text === "e") {
                output.value += Math.E;
            } else if (text === "e^x") {
                output.value = Math.exp(parseFloat(output.value));
            } else if (text === "x²") {
                output.value = Math.pow(parseFloat(output.value), 2);
            } else if (text === "^") {
                // Exponentiation operator add karo
                output.value += "**";
            } else {
                // Baaki sab cases mein button ka text display mein add karo
                output.value += text;
            }
        });
    }
});

// Yeh function degrees ko radians mein convert karta hai
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
