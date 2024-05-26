CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `image_url` varchar(255) NOT NULL
)

INSERT INTO `menu` (`id`, `food_name`, `image_url`) VALUES
(1, 'Pasta', 'images/pasta.jpg'),
(2, 'Salad', 'images/salad.jpg'),
(3, 'Burger', 'images/burger.jpg'),
(4, 'Black Coffee', 'images/black_coffee.jpg'),
(5, 'Coffee', 'images/coffee.jpg'),
(6, 'Pizza', 'images/pizza.jpg');

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp()
)

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `food_item` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL
)