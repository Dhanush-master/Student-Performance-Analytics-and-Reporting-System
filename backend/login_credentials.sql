CREATE DATABASE IF NOT EXISTS student_db;
USE student_db;

-- Create the users table to store login credentials
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'ROLE_USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default admin account
-- (In a real application, passwords should be hashed using BCrypt!)
INSERT INTO users (username, password, role) 
VALUES ('admin', 'admin123', 'ROLE_ADMIN');

-- Insert a default user account
INSERT INTO users (username, password, role) 
VALUES ('teacher', 'teacher123', 'ROLE_USER');
