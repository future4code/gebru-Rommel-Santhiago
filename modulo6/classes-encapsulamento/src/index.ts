/** 
 * EXERCICIO 01
     Analise a classe UserAccount abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo index.ts

    a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
        - Para criar e inicializar um objeto criado a partir de uma classe
        - O construtor deve ser chamado passando os seus argumentos entre parenteses e em seguida definimos os atributos da classes passando para cada um deles os argumentos do método.

    b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
        - Foi impressa apenas uma vez

    c) Como conseguimos ter acesso às propriedades privadas de uma classe?
        - Criando métodos públicos (getters e setters).
 */

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
    public getName(): string {
        return this.name;
    };

    public getCpf(): string {
        return this.cpf;
    };

    public getAge(): number {
        return this.age;
    };

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };
  };

const rommel: UserAccount = new UserAccount("999.999.999-99", "Rommel", 34);

console.log(rommel);