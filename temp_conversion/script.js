function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var resultElement = document.getElementById("result");

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        resultElement.textContent = fahrenheit.toFixed(2) + "°F"; // Limit decimal places
    } else {
        var celsius = (temperature - 32) * 5/9;
        resultElement.textContent = celsius.toFixed(2) + "°C"; // Limit decimal places
    }
}

