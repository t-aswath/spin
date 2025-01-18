
CREATE TYPE UserRole AS ENUM ('dean', 'physician', 'nurse', 'administrator', 'finance_manager');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role UserRole NOT NULL,
    password VARCHAR(255) NOT NULL
);
