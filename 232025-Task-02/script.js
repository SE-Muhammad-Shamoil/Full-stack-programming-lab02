document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-box');
    const resultValue = document.getElementById('result-value');

    // Function to calculate result
    function calculateResult() {
        const val1 = parseFloat(num1Input.value);
        const val2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        // Reset display
        resultBox.className = 'result-box hidden'; // Start hidden or neutral
        resultBox.classList.remove('result-positive', 'result-negative', 'result-neutral', 'visible');

        // Validation: Check if inputs are empty
        if (isNaN(val1) || isNaN(val2)) {
            showError("Please enter valid numbers in both fields.");
            return;
        }

        let result = 0;

        // Mathematical Operations
        switch (operation) {
            case 'add':
                result = val1 + val2;
                break;
            case 'subtract':
                result = val1 - val2;
                break;
            case 'multiply':
                result = val1 * val2;
                break;
            case 'divide':
                // Validation: Prevent division by zero
                if (val2 === 0) {
                    showError("Cannot divide by zero.");
                    return;
                }
                result = val1 / val2;
                break;
            default:
                showError("Invalid Operation.");
                return;
        }

        // Display Result dynamically
        displayResult(result);
    }

    function displayResult(result) {
        // Round to 2 decimal places if necessary
        const formattedResult = Number.isInteger(result) ? result : result.toFixed(2);
        
        resultValue.innerText = formattedResult;
        
        // Bonus: Change background based on value
        if (result > 0) {
            resultBox.classList.add('result-positive');
        } else if (result < 0) {
            resultBox.classList.add('result-negative');
        } else {
            resultBox.classList.add('result-neutral');
        }

        // Make visible with animation
        // Using setTimeout to ensure the transition happens if class was just removed
        setTimeout(() => {
            resultBox.classList.add('visible');
        }, 10);
    }

    function showError(message) {
        resultValue.innerText = message;
        resultBox.classList.add('result-negative', 'visible');
    }

    // Event Listener
    calculateBtn.addEventListener('click', calculateResult);
});
