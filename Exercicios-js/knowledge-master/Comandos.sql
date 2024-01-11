/* Entrar com usuario*/
psql -U postgres
senha: 123456
/* Listar bancos*/
\l

/* Criar banco */
CREATE DATABASE knowledge_final;
CREATE DATABASE knowledge;

/* Conectar com o banco*/
\c knowledge_final
\c knowledge

/* Listar tabelas do banco*/
\dt

/* instalar knex global */
npm i -g knex
npm install knex mysql

/* Criando Migrations */
knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles

/* Criar arquivo */
knex init

/* Sair*/
\q

/* Mostra a veersão*/
select version();

/* Mostra data atual*/
select current_date;

/* Mostra Ajuda*/
\h