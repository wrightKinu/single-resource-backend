DROP DATABASE IF EXISTS shows_dev;
CREATE DATABASE shows_dev;

\c shows_dev;

DROP TABLE IF EXISTS shows;
CREATE TABLE shows (
 id SERIAL PRIMARY KEY,
 image VARCHAR(255),
 title TEXT NOT NULL,
 genre TEXT NOT NULL,
 summary TEXT,
 release_date DATE,
 season_count INT,
 cast TEXT,
 director VARCHAR(255),
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
show_id INTEGER REFERENCES shows (id)
 ON DELETE CASCADE
);
