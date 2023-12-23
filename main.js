let result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function calculator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = '';
}

function getResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}