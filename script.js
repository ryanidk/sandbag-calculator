document.getElementById('sandbagForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) * 3.280839895;
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(height) || isNaN(length)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const rows = Math.ceil(height / 0.3);
    const sandbagWidth = rows * (rows + 1) / 2;
    const totalBags = Math.ceil(sandbagWidth * length * 1.2);

    document.getElementById('result').textContent = `You will need approximately ${totalBags} sandbags.`;
});