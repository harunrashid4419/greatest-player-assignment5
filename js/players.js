
// click select button and player name show right side
function getTextElementById(elementId) {
    const previousUnorderList = document.getElementById('unorder-list');
    const playerLength = previousUnorderList.childNodes.length - 1;

    if(playerLength === 5){
        alert('Error: You cannot add any more names to the list');
        return;
    };

    const textFieldElement = document.getElementById(elementId);
    const textField = textFieldElement.innerText;

    const unorderList = document.getElementById('unorder-list');

    const li = document.createElement('li');
    li.innerText = textField;
    unorderList.append(li);
};


// click button and the button are disabled
function disableButton(elementId) {
    var disabledButton = document.getElementById(elementId);
    disabledButton.disabled = true;
    disabledButton.style.backgroundColor = 'gray';
};

// get value of input field
function getInputFieldById(elementId) {
    const inputField = document.getElementById(elementId);
    const previousInputFieldString = inputField.value;
    const previousInputField = parseFloat(previousInputFieldString);
    inputField.value = '';
    return previousInputField;
};

// set value of innertext
function setElementValueById(elementId, value) {
    const textField = document.getElementById(elementId);
    textField.innerText = value;
};


// first button
document.getElementById('first-btn').addEventListener('click', function () {
    getTextElementById('messi');
    disableButton('first-btn');
});

// second button
document.getElementById('second-btn').addEventListener('click', function () {
    getTextElementById('maradona');
    disableButton('second-btn');
});

// third button
document.getElementById('third-btn').addEventListener('click', function () {
    getTextElementById('pele');
    disableButton('third-btn');
});

// forth button
document.getElementById('forth-btn').addEventListener('click', function () {
    getTextElementById('ronaldo');
    disableButton('forth-btn');
});

// fifth button
document.getElementById('fifth-btn').addEventListener('click', function () {
    getTextElementById('neymer');
    disableButton('fifth-btn');
});

// sixth button
document.getElementById('sixth-btn').addEventListener('click', function () {
    getTextElementById('ronaldinho');
    disableButton('sixth-btn');
});

// calculate button
document.getElementById('calculated').addEventListener('click', function () {
    const previousUnorderList = document.getElementById('unorder-list');
    const playerLength = previousUnorderList.childNodes.length - 1;

    const perPlayerAmount = getInputFieldById('per-player-amount');
    const newTotalAmount = perPlayerAmount * playerLength;

    setElementValueById('toal-player-cost', newTotalAmount);
});

// total calculate button
document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const totalPlayerCost = document.getElementById('toal-player-cost');
    const previousTotalPlayerCostString = totalPlayerCost.innerText;
    const previousTotalPlayerCost = parseFloat(previousTotalPlayerCostString);

    const previousManagerCost = getInputFieldById('manager-field');
    const previousCoachCost = getInputFieldById('coach-field');

    const overallTotalCost = previousTotalPlayerCost + previousManagerCost + previousCoachCost;

    setElementValueById('total-cost-field', overallTotalCost);
});


