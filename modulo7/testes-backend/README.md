# Testes back-end

## ESTRUTURA DE DADOS  
  
* ## Usuários
  * id
  * name
  * email
  * password
  * role `"NORMAL" || "ADMIN"`
---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE IF NOT EXISTS User_Arq (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT "NORMAL"
);
```
---

## ENDPOINTS 

* ## Criar usuário
  * Método: POST
  * Path: `/user/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
    * role

* ## Fazer login
  * Método: POST
  * Path: `/user/login`
  * Body:
    * email (obrigatório),
    * password (obrigatório)

* ## Pegar usuário pelo id
  * Método: GET
  * Path: `user/profile/:id`
  * Authorization: `token`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * nickname
    * email
    * role