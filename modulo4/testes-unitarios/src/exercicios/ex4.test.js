import { retornaArrayOrdenado } from './ex4';

describe('retorna array ordenado', () => {
    test("retorna true para '[1, 2, 3]'", () => {
        const estaOrdenado = retornaArrayOrdenado([3, 2, 1], [1, 2, 3]);
    
        expect(estaOrdenado).toEqual(true);
    });

    test("retorna true para '[1, 3, 4, 7]'", () => {
        const estaOrdenado = retornaArrayOrdenado([4, 7, 1, 3], [1, 3, 4, 7]);
    
        expect(estaOrdenado).toEqual(true);
    });

    test("retorna true para '[-4, -1, 0, 6, 20]'", () => {
        const estaOrdenado = retornaArrayOrdenado([20, -1, -4, 0, 6], [-4, -1, 0, 6, 20]);
    
        expect(estaOrdenado).toEqual(true);
    });
});