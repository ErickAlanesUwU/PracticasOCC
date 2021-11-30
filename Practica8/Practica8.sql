CREATE TABLE PROFESSOR
(
id int NOT NULL AUTO_INCREMENT,
firstName varchar(50) NOT NULL,
lastName varchar(50) NOT NULL,
city varchar(50) NOT NULL,
birthDate date NOT NULL,
salary decimal(10, 2) NOT NULL,
PRIMARY KEY(id)
)
ENGINE InnoDB;

INSERT INTO PROFESSOR(firstName, lastName, lastName, city, birthDate, salary)
VALUES ('Federico','Panca','cochabamba','1990-07-21',2000);

INSERT INTO PROFESSOR(firstName, lastName, lastName, city, birthDate, salary)
VALUES ('Richard','Aguirre','oruro','1999-08-01',1510.50);

INSERT INTO PROFESSOR(firstName, lastName, lastName, city, birthDate, salary)
VALUES ('Juan','Rosales','cochabamba','1995-07-27',1900.90);