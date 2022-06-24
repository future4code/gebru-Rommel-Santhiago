## EXERCICIO 01

``` sql
    CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
            rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    )
```
*a) Explique o que é uma chave estrangeira*
  *È uma chave que estabelece relacionamento entre duas tabelas*

*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
```` sql
    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "001",
        "Legal!",
        7,
        "004"
    );

    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "002",
        "Muito bom!",
        8,
        "004"
    );
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    Não é possível adicionar ou atualizar porque não existe o id referenciado na tabela Movie


d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
``` sql
    ALTER TABLE Movie DROP COLUMN rating;
```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
   Resultado foi uma linha afetada


## EXERCICIO 02

``` sql
    CREATE TABLE MovieCast (
            movie_id VARCHAR(255),
            actor_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        FOREIGN KEY (actor_id) REFERENCES Actor(id)
    );
```

a) Explique, com as suas palavras, essa tabela
    Essa tabela cria chaves estrangeira que relacina atores com filmes

b) Crie, ao menos, 6 relações nessa tabela
```sql
    INSERT INTO MovieCast(movie_id, actor_id)
    VALUES(
        "004",
        "001"
    );

    INSERT INTO MovieCast(movie_id, actor_id)
    VALUES(
        "004",
        "002"
    );

    INSERT INTO MovieCast(movie_id, actor_id)
    VALUES(
        "004",
        "003"
    );
```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
    Não é possivel fazer essa relação, pois não exite um id relacionado a chave estrangeira

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
    Não é possível excluir ou atualizar uma linha pai: Uma restrição de chave estrangeira


## EXERCICIO 03

``` sql
    SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

a) Explique, com suas palavras, a query acima. O que é o operador `ON`?
   O ON é utilizado quando se tem nomes de colunas diferentes ou iguais entre as tabelas

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
```sql
    SELECT m.id as movie_id, r.rate as rating FROM Movie m
    INNER JOIN Rating r ON m.id = r.movie_id;
```