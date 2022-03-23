CREATE DATABASE `time-logger`;

USE `time-logger`;

CREATE TABLE logs(
  `id` VARCHAR(50) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `startTime` DATETIME NOT NULL,
  `endTime` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

SELECT * FROM logs;
