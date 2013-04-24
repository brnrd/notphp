use brnrd_notphp;

CREATE TABLE prof (
	prof_id INT NOT NULL auto_increment,
	nom VARCHAR(35) NOT NULL,
	prenom VARCHAR(35) NOT NULL,
	PRIMARY KEY (prof_id),
	UNIQUE KEY (prof_id)
)TYPE=InnoDB;

CREATE TABLE cours (
	cours_id INT NOT NULL auto_increment,
	intitule VARCHAR(35) NOT NULL,
	PRIMARY KEY (cours_id),
	UNIQUE KEY (cours_id)
)TYPE=InnoDB;

CREATE TABLE enseigner (
	id_prof INT NOT NULL,
	id_cours INT NOT NULL,
	PRIMARY KEY (id_prof, id_cours),
	CONSTRAINT FOREIGN KEY (id_prof) REFERENCES prof (prof_id),
	CONSTRAINT FOREIGN KEY (id_cours) REFERENCES cours (cours_id)
)TYPE=InnoDB;