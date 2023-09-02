document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', function () {
        const height = parseFloat(heightInput.value);   
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = calculateBMI(height, weight);
            resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
        } else {
            resultDiv.innerHTML = 'Please enter valid height and weight.';
        }
    });

    function calculateBMI(height, weight) {
        // BMI formula: BMI = weight (kg) / (height (m) * height (m))
        const heightMeters = height / 100;
        return weight / (heightMeters * heightMeters);
    }
});

const div = document.getElementById("content");
div.addEventListener("contextmenu", (e) => { e.preventDefault() });

document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
