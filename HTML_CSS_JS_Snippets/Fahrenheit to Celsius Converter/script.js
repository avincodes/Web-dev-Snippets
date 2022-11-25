const fahrenheit = document.querySelector('#fahrenheit');
const celsius = document.querySelector('#celsius');

fahrenheit.addEventListener('keyup', (e) => {
    if (e.target.value == '') {
        return;
    }

    const fahrenheitValue =  e.target.value;
    const celsiusValue = convertFahrenheitToCelsius(fahrenheitValue);
    celsius.value = celsiusValue;
});

const convertFahrenheitToCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit-32);
}