-- seed.sql
-- 50 characters: each block inserts a stats row and then inserts a sheet referencing it.
-- Uses WITH ... RETURNING so the inserted stats.id is used for stats_id in sheets.

-- 1
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,18,8,14,8,17)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Eroan',6,'elf',16,45,'warrior', id FROM s;

-- 2
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,14,16,10,12,13)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Liriel',4,'elf',13,35,'wizard', id FROM s;

-- 3
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (16,12,10,15,9,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Thorg',7,'dwarf',17,25,'warrior', id FROM s;

-- 4
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,18,14,10,13,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Maelis',5,'human',14,30,'rogue', id FROM s;

-- 5
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,10,13,12,14,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Kellan',3,'human',12,30,'sorcerer', id FROM s;

-- 6
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,15,17,9,11,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Sylra',6,'elf',13,35,'warlock', id FROM s;

-- 7
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (14,12,9,16,10,8)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Drogan',8,'human',18,30,'warrior', id FROM s;

-- 8
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,17,12,11,15,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Fira',5,'drow',14,35,'druid', id FROM s;

-- 9
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,13,10,13,16,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Orin',6,'human',15,30,'wizard', id FROM s;

-- 10
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,18,11,10,14,13)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Nyssa',4,'elf',13,40,'rogue', id FROM s;

-- 11
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (15,10,9,14,8,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Balor',7,'dwarf',17,25,'warrior', id FROM s;

-- 12
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,16,15,11,12,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Cara',5,'human',14,30,'warlock', id FROM s;

-- 13
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (13,12,8,16,10,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Dain',6,'dwarf',16,25,'warrior', id FROM s;

-- 14
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,14,16,10,13,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Elowen',4,'elf',13,35,'druid', id FROM s;

-- 15
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,11,14,12,15,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Fenric',5,'human',15,30,'sorcerer', id FROM s;

-- 16
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,13,12,13,14,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Galdor',6,'human',14,30,'wizard', id FROM s;

-- 17
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,16,15,9,12,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Hestia',5,'elf',13,35,'sorcerer', id FROM s;

-- 18
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (14,10,9,15,8,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Ivor',7,'human',17,30,'warrior', id FROM s;

-- 19
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,17,11,11,15,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Jorren',5,'drow',14,40,'rogue', id FROM s;

-- 20
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,12,13,13,11,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Kael',4,'human',13,30,'warlock', id FROM s;

-- 21
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,15,14,10,13,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Lysa',6,'elf',14,35,'druid', id FROM s;

-- 22
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (13,11,9,15,10,8)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Merek',7,'dwarf',16,25,'warrior', id FROM s;

-- 23
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,16,12,12,14,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Nara',5,'human',14,30,'sorcerer', id FROM s;

-- 24
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,13,10,14,12,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Oren',6,'human',15,30,'warrior', id FROM s;

-- 25
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,18,13,10,11,15)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Prynn',4,'elf',13,40,'rogue', id FROM s;

-- 26
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,12,11,13,14,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Quill',3,'human',12,30,'wizard', id FROM s;

-- 27
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (14,10,8,16,9,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Roran',8,'dwarf',17,25,'warrior', id FROM s;

-- 28
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,16,15,9,12,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Sable',5,'human',13,35,'warlock', id FROM s;

-- 29
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,14,13,12,11,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Tyra',4,'human',13,30,'sorcerer', id FROM s;

-- 30
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,12,14,13,12,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Ulan',6,'dwarf',16,25,'warrior', id FROM s;

-- 31
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,17,13,10,14,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Varya',5,'elf',14,35,'druid', id FROM s;

-- 32
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (13,11,9,15,10,8)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Wyn',7,'human',16,30,'warrior', id FROM s;

-- 33
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,15,12,11,13,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Xander',6,'human',15,30,'rogue', id FROM s;

-- 34
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,18,10,9,14,13)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Yara',4,'elf',13,40,'sorcerer', id FROM s;

-- 35
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,13,11,14,12,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Zeph',5,'human',14,30,'warrior', id FROM s;

-- 36
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (14,10,9,16,8,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Aldric',8,'dwarf',17,25,'warrior', id FROM s;

-- 37
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,15,16,10,13,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Brina',6,'elf',14,35,'warlock', id FROM s;

-- 38
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (13,11,10,15,9,8)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Cormac',7,'human',16,30,'warrior', id FROM s;

-- 39
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,14,12,12,15,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Dara',5,'drow',14,35,'rogue', id FROM s;

-- 40
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,12,13,13,11,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Eryn',4,'human',13,30,'sorcerer', id FROM s;

-- 41
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,17,14,11,12,13)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Fendrel',6,'elf',14,40,'wizard', id FROM s;

-- 42
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,11,10,14,13,9)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Gisa',5,'human',15,30,'druid', id FROM s;

-- 43
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (14,10,9,16,8,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Halvor',8,'dwarf',17,25,'warrior', id FROM s;

-- 44
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (8,15,16,9,13,14)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Isolde',6,'elf',13,35,'sorcerer', id FROM s;

-- 45
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (11,14,12,13,12,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Jaxen',5,'human',14,30,'rogue', id FROM s;

-- 46
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,16,15,10,11,13)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Kira',4,'elf',13,35,'warlock', id FROM s;

-- 47
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (13,11,10,15,9,8)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Lothar',7,'human',16,30,'warrior', id FROM s;

-- 48
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (10,14,13,12,15,11)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Mira',5,'drow',14,35,'druid', id FROM s;

-- 49
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (12,12,11,13,14,10)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Norren',6,'human',15,30,'warrior', id FROM s;

-- 50
WITH s AS (
  INSERT INTO stats (strength,dexterity,charisma,constitution,intelligence,wisdom)
  VALUES (9,15,14,11,13,12)
  RETURNING id
)
INSERT INTO sheets ("name","level","species",armor,speed,"class",stats_id)
SELECT 'Petra',5,'elf',14,35,'rogue', id FROM s;
