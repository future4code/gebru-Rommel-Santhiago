## EXERCICIO 01

Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a)
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
*Esse conamando apagaria a coluna `salary`*

b)
```sql
ALTER TABLE Actor MODIFY gender VARCHAR(6);
```
*Esse comando modifica a coluna `gender` para aceitar até 6 caracteres*

c) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*
```sql
ALTER TABLE Actor MODIFY gender VARCHAR(100);
```

## EXERCICIO 02

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```sql
UPDATE Actor
SET name = "FERNANDA MONTENEGRO", birth_date = "1929-01-01"
WHERE id = "003";
```

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
```sql
UPDATE Actor
SET name = UPPER(name)
WHERE id = "005";

UPDATE Actor
SET name = LOWER(name)
WHERE id = "005";
```

c) Escreva uma query que atualize todas as informações do ator com o id 005
```sql
UPDATE Actor
SET name = UPPER(name), 
	salary = 800000, 
	birth_date = "1978-06-16", 
	gender = UPPER(gender)
WHERE id = "005";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
```sql
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
Nenhum ator foi alterado pois o `id` não existe

## EXERCICIO 03

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
```sql
DELETE FROM Actor WHERE name = "FERNANDA MONTENEGRO";
```

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
```sql
DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

## EXERCICIO 04

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
```sql
SELECT MAX(salary) FROM Actor;
```

b) *Escreva uma query que pegue o menor salário das atrizes*
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) *Escreva uma query que pegue a quantidade de atrizes*
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) *Escreva uma query que pegue a soma de todos os salários*
```sql
SELECT SUM(salary) FROM Actor;
```

## EXERCICIO 05

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
*Esse comando retorna a quantidade de atores separado por genero*

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) *Faça uma query que retorne todos os atores ordenados pelo salário*
```sql
SELECT * FROM Actor ORDER BY salary ASC;
```

d) *Faça uma query que retorne os atores com os três maiores salarios*
```sql
SELECT * FROM Actor 
ORDER BY salary DESC
LIMIT 3;
```

e) *Faça uma query que retorne a média de salário por gênero*
```sql
SELECT gender, AVG(salary) FROM Actor 
GROUP BY gender;
```

### EXERCICIO 06

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
```sql
ALTER TABLE Movie 
ADD COLUMN playing_limit_date DATE NOT NULL 
AFTER release_date;
```

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
```sql
ALTER TABLE Movie
MODIFY rating FLOAT;
```

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
```sql
UPDATE Movie
SET playing_limit_date = "2022-05-27"
WHERE id = 002;

UPDATE Movie
SET playing_limit_date = "2022-08-27"
WHERE id = 004;
```

d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
```sql
DELETE FROM Movie WHERE id = 003;

UPDATE Movie
 SET synopsis = "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates."
 WHERE id = 003
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
Nenhum dado foi alterado, pois o filme não se encontra na base de dados.

# DESAFIOS

## EXERCICIO 07

Agora para treinar as funções novamente, faça uma query para responder as perguntas abaixo:

a) *Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
```sql
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```

b) *Qual a média das avaliações dos filmes?*
```sql
SELECT AVG(rating) FROM Movie;
```

c) *Qual a quantidade de filmes em cartaz?*
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d) *Qual a quantidade de filmes que ainda irão lançar?*
```sql
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

e) *Qual a maior nota dos filmes?*
```sql
SELECT MAX(rating) FROM Movie;
```

f) *Qual a menor nota dos filmes?*
```sql
SELECT MIN(rating) FROM Movie;
```

### EXERCICIO 08

Escreva **uma** query que:

a) *Retorne todos os filmes em ordem alfabética*
```sql
SELECT * FROM Movie 
ORDER BY title ASC;
```

b) *Retorne os 5 primerios filmes em ordem descrente alfabética* 
```sql
SELECT * FROM Movie 
ORDER BY title DESC 
LIMIT 5;
```

c) *Retorne os 3 filmes mais recentes em cartaz*
```sql
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d) *Retorne os 3 filmes melhor avalidos*
```sql
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```