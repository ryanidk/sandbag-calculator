document.getElementById('sandbagForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let length = parseFloat(document.getElementById('length').value);

    if (!document.getElementById('heightFt').checked) {
        height *= 3.280839895;
    }

    if (document.getElementById('lengthFt').checked) {
        length /= 3.280839895;
    }

    if (isNaN(height) || isNaN(length)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const rows = Math.ceil(height / 0.3);
    const sandbagWidth = rows * (rows + 1) / 2;
    const totalBags = Math.ceil(sandbagWidth * length * 1.2);

    document.getElementById('result').textContent = `You will need approximately ${totalBags} sandbags.`;
});

function toggleSelect(button) {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}