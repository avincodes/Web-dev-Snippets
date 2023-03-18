const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#peolpe');
const tipPercentInput = document.querySelectorAll('.tip-button');
const personBill = document.querySelector('#person-bill');
const totalBill = document.querySelector('#total-bill');
const reset = document.querySelector('.reset-button');
const customPercentage = document.querySelector('.custom');
let percentage = 5;

function calculateBill() {
    const billValue = billInput.value;
    const noOfPeople = peopleInput.value;
    // const people = peopleInput.value;

    let tipAmount = ((billValue / 100) * percentage) / noOfPeople;
    let totalAmount = (billValue / noOfPeople) + parseInt(tipAmount);

    personBill.textContent = `$${(tipAmount).toFixed(2)}`;
    totalBill.textContent = `$${(totalAmount).toFixed(2)}`;
}

tipPercentInput.forEach(item => {
    item.addEventListener('click', function() {
        customPercentage.value = '';
        tipPercentInput.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
        percentage = item.getAttribute('value');

        calculateBill();
    });
});

customPercentage.addEventListener('input', function() {
    tipPercentInput.forEach(btn => btn.classList.remove('active'));
    percentage = this.value;

    calculateBill();
});

function resetInputs() {
    billInput.value = '';
    peopleInput.value = 1;
    customPercentage.value = '';
    personBill.textContent = `$0.00`;
    totalBill.textContent = `$0.00`;
    tipPercentInput[0].click();
}

[billInput, peopleInput].forEach(item => {
    item.addEventListener('input', calculateBill);
});

reset.addEventListener('click', resetInputs);