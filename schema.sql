PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS questions (
   question_id INTEGER,
   question TEXT NOT NULL,
   parent_id INTEGER,
   PRIMARY KEY (question_id)
);
INSERT OR IGNORE INTO questions VALUES(1,'Question1',1);
INSERT OR IGNORE INTO questions VALUES(2,'Question2',1);
INSERT OR IGNORE INTO questions VALUES(3,'Question3',1);
INSERT OR IGNORE INTO questions VALUES(4,'Question4',2);
INSERT OR IGNORE INTO questions VALUES(5,'Question5',2);
INSERT OR IGNORE INTO questions VALUES(6,'Question6',2);
INSERT OR IGNORE INTO questions VALUES(7,'Question7',3);
INSERT OR IGNORE INTO questions VALUES(8,'Question8',3);
COMMIT;

