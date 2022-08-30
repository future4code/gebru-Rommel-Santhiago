# EXERCICIOS DE TESTES AUTOMATIZADOS

## - **Exercício 1**
    
    Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto `user` (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne `undefined`
    
    ```tsx
    function performPurchase(user: User, value: number): User | undefined 
    ```
    
    a) *Crie uma interface para representar o usuário*
    
    b) *Implemente  a função*