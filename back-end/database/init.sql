CREATE TYPE characters_class AS ENUM ('wizard','warlock','sorcerer','rogue','warrior','druid');
CREATE TYPE species AS ENUM ('human','elf','dwarf','drow');
CREATE TABLE stats (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    strength smallint DEFAULT 8,
    dexterity smallint DEFAULT 8,
    constitution smallint DEFAULT 8,
    intelligence smallint DEFAULT 8,
    wisdom smallint DEFAULT 8,
    charisma smallint DEFAULT 8
);
CREATE TABLE sheets (
    id UUID PRIMARY KEY DEFAULT uuidv7(),
    name VARCHAR(64) NOT NULL,
    species species DEFAULT 'human',
    class characters_class NOT NULL,
    level smallint DEFAULT 1,
    armor smallint DEFAULT 10,
    speed smallint DEFAULT 30, 
    stats_id UUID NOT NULL,
    FOREIGN KEY(stats_id) REFERENCES stats(id)
);