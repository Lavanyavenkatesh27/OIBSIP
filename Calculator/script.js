let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    if (value === '%' && display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('−', '-'));
    } catch (error) {
        display.value = 'Error';
    }
}


function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    display.value = '';
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    display.value = '';
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
