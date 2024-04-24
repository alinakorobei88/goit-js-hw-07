const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (evt) => {
    const trimValue = nameInput.value.trim();
    nameOutput.textContent = trimValue || 'Anonymous'
});