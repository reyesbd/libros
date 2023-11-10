CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE autores(
    id_autor        INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(128)    NOT NULL,
    apellidos       VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_autor)    
);

CREATE TABLE editoriales(
    id_editorial    INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_editorial)
);

CREATE TABLE temas(
    id_tema         INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_tema)
);

CREATE TABLE libros(
    id_libro        INTEGER         NOT NULL    AUTO_INCREMENT,
    titulo          VARCHAR(255)    NOT NULL,
    edicion         VARCHAR(32)     NOT NULL,
    fk_id_autor     INTEGER         NOT NULL,
    fk_id_editorial INTEGER         NOT NULL,
    fk_id_tema      INTEGER         NOT NULL,
    PRIMARY KEY (id_libro),
    FOREIGN KEY (fk_id_autor)       REFERENCES autores(id_autor),
    FOREIGN KEY (fk_id_editorial)   REFERENCES editoriales(id_editorial),
    FOREIGN KEY (fk_id_tema)        REFERENCES temas(id_tema)
);

-- Insertar autores
INSERT INTO autores (nombre, apellidos) VALUES
('Gabriel', 'García Márquez'),
('J.K.', 'Rowling'),
('George', 'Orwell'),
('Harper', 'Lee'),
('J.R.R.', 'Tolkien'),
('Agatha', 'Christie'),
('Ernest', 'Hemingway'),
('Jane', 'Austen'),
('F. Scott', 'Fitzgerald'),
('Leo', 'Tolstoy');

-- Insertar editoriales
INSERT INTO editoriales (nombre) VALUES
('Random House'),
('Bloomsbury'),
('Penguin Books'),
('HarperCollins'),
('Houghton Mifflin Harcourt'),
('Agatha Christie Ltd.'),
('Scribner'),
('Penguin Classics'),
('Scribner'),
('Vintage Classics');

-- Insertar temas
INSERT INTO temas (nombre) VALUES
('Ficción'),
('Fantasía'),
('Distopía'),
('Clásico'),
('Misterio'),
('Novela Romántica'),
('Novela Histórica'),
('Novela Contemporánea'),
('Policíaca'),
('Épica');

-- Insertar libros
INSERT INTO libros (titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema) VALUES
('Cien años de soledad', '1ª edición', 1, 1, 1),
('Harry Potter y la piedra filosofal', '1ª edición', 2, 2, 2),
('1984', '1ª edición', 3, 3, 3),
('To Kill a Mockingbird', '1st Edition', 4, 4, 4),
('The Hobbit', '1st Edition', 5, 5, 5),
('Murder on the Orient Express', '1st Edition', 6, 6, 6),
('The Old Man and the Sea', '1st Edition', 7, 7, 7),
('Pride and Prejudice', '1st Edition', 8, 8, 8),
('The Great Gatsby', '1st Edition', 9, 9, 9),
('War and Peace', '1st Edition', 10, 10, 10);
