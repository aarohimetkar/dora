// script.js
document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const units = document.getElementById('units').value;

    fetch('calculate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'units=' + units,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
    });
});
