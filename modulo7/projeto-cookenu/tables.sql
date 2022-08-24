CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    role ENUM ("normal", "admin") NOT NULL DEFAULT "normal"
);