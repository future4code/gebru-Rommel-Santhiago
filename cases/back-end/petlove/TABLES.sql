    CREATE TABLE IF NOT EXISTS Dog_Walking(
        id varchar(255) PRIMARY KEY NOT NULL,
        status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
        appointment_date DATE,
        price FLOAT,
        duration ENUM(30, 60) DEFAULT 30,
        latitude VARCHAR(255),
        longitude VARCHAR(255),
        pets INT,
        start_time TIMESTAMP,
        end_time TIMESTAMP
    )