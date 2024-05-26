document.addEventListener('DOMContentLoaded', () => {
    loadMenu();

    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let customerName = document.getElementById('customer_name').value;
        let orderItems = [];

        document.querySelectorAll('.menu-item').forEach(item => {
            let foodItem = item.querySelector('h3').innerText;
            let quantity = item.querySelector('input').value;

            if (quantity > 0) {
                orderItems.push({ food_item: foodItem, quantity: quantity });
            }
        });

        let formData = new FormData();
        formData.append('customer_name', customerName);
        formData.append('order_items', JSON.stringify(orderItems));

        fetch('submit_order.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
            document.getElementById('orderForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

function loadMenu() {
    fetch('menu.php')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu');
            menuContainer.innerHTML = '';

            data.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                menuItem.innerHTML = `
                    <img src="${item.image_url}" alt="${item.food_name}">
                    <h3>${item.food_name}</h3>
                    <input type="number" min="0" placeholder="Quantity">
                `;

                menuContainer.appendChild(menuItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
