// Get the display element
var display = document.getElementsByName("display")[0];

// Function to update the display
function updateDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        var result = math.evaluate(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Add event listeners to the buttons
var buttons = document.querySelectorAll("#butoes input[type='button']");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var value = this.value;
        if (value === "=") {
            evaluateExpression();
        } else if (value === "c") {
            clearDisplay();
        } else {
            updateDisplay(value);
        }
    });
});
