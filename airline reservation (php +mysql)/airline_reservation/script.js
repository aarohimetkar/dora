document.addEventListener('DOMContentLoaded', () => {
    loadFlights();

    document.getElementById('reservationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        fetch('book_flight.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            event.target.reset();
            loadFlights(); // Refresh flights after booking
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.getElementById('viewReservationsBtn').addEventListener('click', () => {
        fetch('view_reservations.php')
            .then(response => response.json())
            .then(data => {
                const reservationsList = document.getElementById('reservationsList');
                reservationsList.innerHTML = '';
                
                if (data.length === 0) {
                    reservationsList.textContent = 'No reservations found.';
                } else {
                    const table = document.createElement('table');
                    const headerRow = document.createElement('tr');
                    ['ID', 'Name', 'Email', 'Phone', 'Flight Number', 'Departure', 'Destination', 'Date', 'Time'].forEach(headerText => {
                        const th = document.createElement('th');
                        th.textContent = headerText;
                        headerRow.appendChild(th);
                    });
                    table.appendChild(headerRow);
                    
                    data.forEach(reservation => {
                        const row = document.createElement('tr');
                        Object.values(reservation).forEach(text => {
                            const td = document.createElement('td');
                            td.textContent = text;
                            row.appendChild(td);
                        });
                        table.appendChild(row);
                    });
                    
                    reservationsList.appendChild(table);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    function loadFlights() {
        fetch('get_flights.php')
            .then(response => response.json())
            .then(data => {
                const flightSelect = document.getElementById('flight');
                flightSelect.innerHTML = ''; // Clear previous options
                data.forEach(flight => {
                    const option = document.createElement('option');
                    option.value = flight.id;
                    option.textContent = `${flight.flight_number} - ${flight.departure} to ${flight.destination}`;
                    flightSelect.appendChild(option);
                });
            });
    }
});
