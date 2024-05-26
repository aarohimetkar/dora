$(document).ready(function() {
    $('#calculateBtn').click(function() {
      const units = $('#units').val();
      if (!units) {
        alert('Please enter units consumed');
        return;
      }
  
      $.ajax({
        type: 'POST',
        url: '/calculate',
        data: JSON.stringify({ units }),
        contentType: 'application/json',
        success: function(response) {
          $('#result').text(`Your electricity bill amount is Rs. ${response.amount.toFixed(2)}`);
        },
        error: function(xhr, status, error) {
          console.error(error);
          alert('An error occurred while calculating the bill');
        }
      });
    });
  });  