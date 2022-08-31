# EXERCICIOS DE USER ROLES

## - Exercício 1
    
    Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
    
    a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

    ```sql
        ALTER TABLE `Auth_users` ADD COLUMN role ENUM("normal", "admin") DEFAULT "normal";
    ```
    
    b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
    
    c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
    
    d) *Altere o login para criar o token com o `role` do usuário*

## - Exercício 2
    
    Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 
    
    a) *Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*