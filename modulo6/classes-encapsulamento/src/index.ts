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
    private balance: number = 1000;
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

    public setBalance(newValue: number): void {
        this.balance += newValue;
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
  };

const rommel: UserAccount = new UserAccount("999.999.999-99", "Rommel", 34);

console.log(rommel);

/**
 *  EXERCICIO 2
    
    Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount

    type Transaction = {
        description: string,
        value: number,
        date: string
    }
 */

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    };

    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };
};

const transaction01 = new Transaction("Tranferência", 600, "2022/07/14");

rommel.setTransactions(transaction01)

console.log(rommel)

/**
 * EXERCICIO 03
    Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).
 */

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    };
};