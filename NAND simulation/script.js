const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const output = document.getElementById('output');
const outputText = document.getElementById('outputText');

function updateOutput() {
    const valueA = inputA.checked;
    const valueB = inputB.checked;
    const result = !(valueA && valueB);
    if (result) {
        output.classList.add('on');
        outputText.textContent = 'Output: 1';
    } else {
        output.classList.remove('on');
        outputText.textContent = 'Output: 0';
    }
}

inputA.addEventListener('change', updateOutput);
inputB.addEventListener('change', updateOutput);

updateOutput();
