CREATE TABLE `flights` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `flight_number` VARCHAR(10) NOT NULL,
    `departure` VARCHAR(50) NOT NULL,
    `destination` VARCHAR(50) NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME NOT NULL,
    `seats` INT NOT NULL
);

CREATE TABLE `reservations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `flight_id` INT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    FOREIGN KEY (`flight_id`) REFERENCES `flights`(`id`)
);

-- Insert sample flights
INSERT INTO `flights` (`flight_number`, `departure`, `destination`, `date`, `time`, `seats`) VALUES
('FL123', 'New York', 'Los Angeles', '2024-06-01', '08:00:00', 150),
('FL456', 'San Francisco', 'Chicago', '2024-06-02', '10:00:00', 120),
('FL789', 'Houston', 'Miami', '2024-06-03', '14:00:00', 100);
