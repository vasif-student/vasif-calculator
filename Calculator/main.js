function calcNumbers(result) {
    form.displayResult.value = form.displayResult.value + result;
}

function clearAll() {
    form.displayResult.value = '';
}

function delFunc() {
    form.displayResult.value = form.displayResult.value.slice(0, -1);
}