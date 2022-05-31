import { retornaIniciaisMaiusculas } from './ex5';

describe('retorna iniciais da frase em maiusculas', () => {
    test('retorna true para "Ola"', () => {
        const frase = "Ola" === retornaIniciaisMaiusculas("ola");

        expect(frase).toEqual(true);
    });

    test('retorna true para "Ola, Mundo"', () => {
        const frase = "Ola, Mundo" === retornaIniciaisMaiusculas("ola, mundo");

        expect(frase).toEqual(true);
    });

    test('retorna true para "Eu Sou O Bob, Aluno Da Labenu"', () => {
        const frase = "Eu Sou O Bob, Aluno Da Labenu" === retornaIniciaisMaiusculas("eu sou o bob, aluno da labenu");

        expect(frase).toEqual(true);
    });
})