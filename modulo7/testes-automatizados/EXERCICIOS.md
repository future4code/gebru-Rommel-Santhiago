# EXERCICIOS DE TESTES AUTOMATIZADOS

## - **Exercício 1**
    
    Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto `user` (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne `undefined`
    
    ```tsx
    function performPurchase(user: User, value: number): User | undefined 
    ```
    
    a) *Crie uma interface para representar o usuário*
    
    b) *Implemente  a função*

## - **Exercício 2**
    
    Agora vamos criar testes para essa função. Lembre-se de criar o arquivo com o padrão `<nome>.test.ts` na pasta  `tests`
    
    a) *Faça um teste com um usuário com o saldo maior do que o valor de compra*
    
    b) *Faça um teste com um usuário com o saldo igual ao valor de compra*
    
    c) *Faça um teste com um usuário com o saldo menor do que o valor de compra*