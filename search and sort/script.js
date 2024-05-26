// Function to convert input string to array
function parseInput(input) {
    return input.split(',').map(item => item.trim());
}

// Event listeners for integer array
$('#searchInteger').click(function() {
    const input = $('#integerInput').val();
    const arr = parseInput(input);
    const searchVal = prompt('Enter value to search for:');
    const result = arr.includes(searchVal) ? `${searchVal} found at index ${arr.indexOf(searchVal)}` : `${searchVal} not found`;
    $('#integerResult').html(`<li class="list-group-item result-item">${result}</li>`);
});

$('#sortInteger').click(function() {
    const input = $('#integerInput').val();
    const arr = parseInput(input);
    arr.sort((a, b) => a - b);
    $('#integerResult').html(arr.map(item => `<li class="list-group-item result-item">${item}</li>`).join(''));
});

// Event listeners for named entity array
$('#searchEntity').click(function() {
    const input = $('#entityInput').val();
    const arr = parseInput(input);
    const searchVal = prompt('Enter value to search for:');
    const result = arr.includes(searchVal) ? `${searchVal} found at index ${arr.indexOf(searchVal)}` : `${searchVal} not found`;
    $('#entityResult').html(`<li class="list-group-item result-item">${result}</li>`);
});

$('#sortEntity').click(function() {
    const input = $('#entityInput').val();
    const arr = parseInput(input);
    arr.sort();
    $('#entityResult').html(arr.map(item => `<li class="list-group-item result-item">${item}</li>`).join(''));
});
