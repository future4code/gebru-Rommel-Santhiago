CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## EXERCICIO 01
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
 - O VARCHAR para adicionar string no id, name e gender
 - PRIMARY KEY no id para informar que essa é a chave primaria
 - NOT NULL para informar que esse campo não pode ser nulo
 - DATE para representar uma data

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
 - SHOW DATABASES retorna o banco de dados conectado
 - SHOW TABLE retorna as tabelas do banco de dados

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
 - DESCRIBE Actor retorna toda a estrutura da tabela e os tipos de cada coluna

## EXERCICIO 02
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "002", 
   "Glória Pires",
   1.200000,
   "1963-08-23", 
   "female"
 );

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
0	9	17:46:49	INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "002", 
   "Glória Pires",
   1.200000,
   "1963-08-23", 
   "female"
 )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.188 sec

 Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

c) *Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1*
    INSERT INTO Actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
    *Inserção corrigida*
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    )

d) *Código de erro: 1364. O campo 'nome' não tem um valor padrão*
    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );
    *Inserção corrigida*
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "António Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );

e) *Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1, a data deve ser uma string*
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );
    *Inserção corrigida*
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );

## EXERCICIO 03
a) *Escreva uma query que retorne todas as informações das atrizes*
    - SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
    - SELECT salary from Actor WHERE name = "Tony Ramos";

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
    - SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
    *0 linha(s) retornada(s), não tem nenhuma informação com esse quesito*

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
    - SELECT id, name, salary from Actor WHERE salary <= 500000;

e) *Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*
    - SELECT id, nome from Actor WHERE id = "002"
*Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'*
 *Inserção corrigida*
    - SELECT id, name from Actor WHERE id = "002";