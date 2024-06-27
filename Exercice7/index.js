function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResultElement = document.getElementById('binaryResult');

    if (decimalInput === '') {
        binaryResultElement.textContent = 'Veuillez entrer un nombre décimal.';
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);

    if (isNaN(decimalNumber)) {
        binaryResultElement.textContent = 'Veuillez entrer un nombre valide.';
        return;
    }

    const binaryResult = decimalNumber.toString(2);
    binaryResultElement.textContent = `Représentation binaire : ${binaryResult}`;
}
