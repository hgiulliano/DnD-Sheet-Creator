select *from stats;
insert into stats(strength,dexterity,charisma,constitution,intelligence,wisdom)
values (10, 18, 8, 14, 8, 17);

--019b2d00-b584-737a-92d1-8ca756862852
select *from sheets ;
insert into sheets ("name","level" ,"species" ,armor ,speed ,"class" ,stats_id )
values ('Sujiro',6,'elf',16,45,'warrior','019b2d00-b584-737a-92d1-8ca756862852');

select * from sheets sh join stats st on sh.stats_id = st.id where sh.armor >=15 order by sh.armor desc;

--funcao pra contar a quantidade
select count(*) from sheets where species = 'dwarf' ;

delete from sheets where id = '019b2d09-945c-7038-bcd6-fdcb0db2b331';

delete from stats where id = '019b2d08-9a00-7c51-899d-71c0d5d871c5';

commit;

select * from sheets where level >= 6 order by level desc limit 100;
