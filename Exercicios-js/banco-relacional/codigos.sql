/* Operadores Relacionais */
/* Igual = */ 
select * from produto where codigo = 10; /* O caracter '*'  traz todas as colunas da tabela e linhas*/
/* Menor que < */ 
select * from produto where qtde < 5;
/* Menor ou igual a <= */ 
select * from produto where preco <= 50;
/* Maior que > */
select * from produto where preco > 500;
/* Maior ou igual a */
select * from produto where preco >= 500;
/* Diferente */
select * from produto where codigo <> 2;


/* Operadores Lógicos */
/* AND */
select * from produto where marca = 'LG' and preco > 1500;
/* OR */
select * from produto where qtde < 5 or qtde > 100;
/* NOT */
select * from produto where preco is not null;


/* Operadores Especiais */
/*IS NULL ou IS NOT NULL*/
select * from produto where preco is null;
/*BETWEEN*/
select * from produto where preco between 10 and 100;
/*LIKE*/
select * from produto where nome like '_A%'; /* '%' Qualquer sequencia, '-' único caractere*/
/*IN*/
Select * from produto Where codigo in (2, 5, 15, 29);
/* DISTINCT */
Select distinct categoria from produto;

/*Trazer apenas nome e preço*/
select nome,preco from produto where categoria='Bebida';


/* Order By */
/* Ordem Crescente */
select * produto order by nome asc; /* Por padrão order by já traz de forma ascendente*/
/* Ordem Decrescente */
select * produto order by nome desc; /*des poem em Ordem Decrescente */
/* Remove os repedidos, redundantes */
select distinct categoria from produto;

/*IN subconsulta, traz os nomes é os preços só dos produtos das categorias limpeza e bebida*/
SELECT nome_prod, preco_prod FROM Produto
WHERE id_categoria IN (SELECT id_categoria FROM categoria
                              WHERE nome_categoria = 'BEBIDA'
                              OR nome_categoria = 'LIMPEZA');/*sub select para descobrir os id de bebida e limpeza*/

/*IN sem sub consulta, já tem os codigos de bebida e limpeza*/
SELECT nome_prod, preco_prod FROM Produto 
WHERE id_categoria IN (20, 30);


/* Funções de Agregação */
/* count(*) conta a quantidade de produtos, linhas*/
select count(*) as Total from Produto; /* 'as' cria o nome da coluna de retorno como Total */

/*AVG(Média); SUM(soma), MAX(Maior valor), MIN(Menor valor), AS(nomeia a tabela retornada)*/
SELECT categoria, AVG(PRECO) as Média, SUM(PRECO) AS Soma,
MAX(Preco) as Maior, MIN(Preco) as Menor
FROM produto
GROUP BY categoria;/*Agrupa por categoria*/

/* HAVING */
SELECT categoria, AVG(PRECO) as Média
FROM produto
WHERE categoria(10 ,30)/* WHERE filtra as categorias*/
GROUP BY categoria /* GROUP BY agrupa */
HAVING AVG(PRECO) < 10; /* HAVING Filtrar em cima do que foi grupado, Pegar só as média com valor menor que 10 */


/* INSERT */
/* Caso 1*/
INSERT INTO nome_tabela
VALUES (1,'TV', 3.500, 'Eletrônicos'); /* Ordem dos atributos mantidos */

/* Caso 2*/
INSERT INTO nome_tabela (id, categoria, nome)/* Ordem dos atributos não precisa ser mantidos */
VALUES (1,'Eletronicos', 'TV LCD 50');

/* Caso 3*/
INSERT INTO nome_tabela1
SELECT * FROM nome_tabela2 /* Copiar de uma tabela para outra*/
WHERE CATEG="HIGIENE";

/* DELETE */
/* Caso 1*/
DELETE FROM PRODUTO WHERE PRECO IS NULL; /* Exclui todos os produtos sem preço, preco === nul*/

/* Caso 2*/
DELETE FROM PRODUTO; /* Exclui todos os produtos, se não por o where apga tudo*/

/* UPDATE */
/* Caso 1*/
UPDATE PRODUTO
SET PRECO = PRECO * 1.1; /* Reajuste de 10% no preço de todos os produtos*/
 
/* Caso 2*/
UPDATE PRODUTO
SET PRECO = PRECO * 1.1 /* Reajuste de 10% no preço de todos os produtos de limpeza*/
WHERE CATEGORIA = 'LIMPEZA';


/* INNER JOIN*/
SELECT p.nome_prod as produto,
c.nome_categoria as categoria
FROM produto as p INNER JOIN categoria as /* Compara 2 tabelas e tras o que bate, iterceção, some com os sem categoria*/
c ON (p.id_categoria = c.id_categoria);

/* LEFT OUTER JOIN*/
SELECT p.nome_prod as produto,
c.nome_categoria as categoria
FROM produto as p LEFT OUTER JOIN categoria as c /* pega todos os elementos da coluna da esquerda, mesmo se na direita tiver null*/
ON (p.id_categoria = c.id_categoria);

/* RIGHT OUTER JOIN*/
SELECT p.nome_prod as produto,
c.nome_categoria as categoria
FROM produto as p RIGHT OUTER JOIN categoria as c /* pega todos os elementos da coluna da direita mesmo se na esquerda tiver null*/
ON (p.id_categoria = c.id_categoria);

/* FULL OUTER JOIN*/
SELECT p.nome_prod as produto,
    c.nome_categoria as categoria
FROM produto as p RIGHT OUTER JOIN
    categoria as c ON (p.id_categoria = c.id_categoria); /*pega todos mesmo os nulos das colunas da direita e da esquerda*/


/* INNER JOIN Na mesma tabela, auto relacionamento*/
SELECT E.nome as Empregado, C.nome as Chefe
FROM Empregado as E INNER JOIN Empregado as C ON
(E.id_chefe = c.id_emp);

/* Processamento de Transações */
INSERT INTO UNIDADE (ID_UNIDADE, NOME_UNIDADE, ID_UNIDADE_SUPERIOR) VALUES
(10, 'DIRETORIA DE TECNOLOGIA DA INFORMAÇÃO', 5);

INSERT INTO UNIDADE (ID_UNIDADE, NOME_UNIDADE, ID_UNIDADE_SUPERIOR) VALUES
(11, 'COORDENAÇÃO DE SISTEMAS', 10);

SAVEPOINT ponto1; /* DTL */  /* Salva alterações do Banco até aqui */ 

DELETE FROM EMPREGADO WHERE SALARIO < 1000; /* será desfeita pelo roolback */ 

ROLLBACK TO SAVEPOINT ponto1; /* DTL */ /* Desfaz alterações, volta ate onde foi salvo SAVEPOINT = ponto1 */ 

UPDATE EMPREGADO SET SALARIO = SALARIO * 1.05 WHERE ID_UNIDADE = 11;

COMMIT; /* DTL */ /* Salva as alteraçoes feitas  */