
// click button and the button are disabled
function disableButton(elementId) {
    var disabledButton = document.getElementById(elementId);
    disabledButton.disabled = true;
    disabledButton.style.backgroundColor = 'gray';
};

// click select button and player name show right side
function getTextElementById(elementId) {
    const textFieldElement = document.getElementById(elementId);
    const textField = textFieldElement.innerText;

    const unorderList = document.getElementById('unorder-list');

    const li = document.createElement('li');
    li.innerText = textField;
    unorderList.append(li);
};

function getInputFieldById(elementId) {
    const inputField = document.getElementById(elementId);
    const previousInputFieldString = inputField.value;
    const previousInputField = parseFloat(previousInputFieldString);
    inputField.value = '';
    return previousInputField;
};

function setElementValueById(elementId, value) {
    const textField = document.getElementById(elementId);
    textField.innerText = value;
};



document.getElementById('first-btn').addEventListener('click', function () {
    getTextElementById('messi');
    disableButton('first-btn');
});

document.getElementById('second-btn').addEventListener('click', function () {
    getTextElementById('maradona');
    disableButton('second-btn');
});

document.getElementById('third-btn').addEventListener('click', function () {
    getTextElementById('pele');
    disableButton('third-btn');
});

document.getElementById('forth-btn').addEventListener('click', function () {
    getTextElementById('ronaldo');
    disableButton('forth-btn');
});

document.getElementById('fifth-btn').addEventListener('click', function () {
    getTextElementById('neymer');
    disableButton('fifth-btn');
});

document.getElementById('sixth-btn').addEventListener('click', function () {
    getTextElementById('ronaldinho');
    disableButton('sixth-btn');
});

document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const totalPlayerCost = document.getElementById('toal-player-cost');
    const previousTotalPlayerCostString = totalPlayerCost.innerText;
    const previousTotalPlayerCost = parseFloat(previousTotalPlayerCostString);

    const previousManagerCost = getInputFieldById('manager-field');
    const previousCoachCost = getInputFieldById('coach-field');

    const overallTotalCost = previousTotalPlayerCost + previousManagerCost + previousCoachCost;

    setElementValueById('total-cost-field', overallTotalCost);
});

document.getElementById('calculated').addEventListener('click', function () {
    const previousUnorderList = document.getElementById('unorder-list');
    const playerLength = previousUnorderList.childNodes.length - 1;

    const perPlayerAmount = getInputFieldById('per-player-amount');
    const newTotalAmount = perPlayerAmount * playerLength;

    setElementValueById('toal-player-cost', newTotalAmount);
})
const previousUnorderList = document.getElementById('unorder-list');
console.log(previousUnorderList.childNodes.length);



