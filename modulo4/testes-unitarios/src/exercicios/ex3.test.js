import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("Retorna true para '[1, 2, 3, 2]'", () => {
        const ehDupicado = checaItensDuplicados([1, 2, 3, 2]);
        expect(ehDupicado).toEqual(true);
    });

    test("Retorna false para '[1]'", () => {
        const ehDupicado = checaItensDuplicados([1]);
        expect(ehDupicado).toEqual(false);
    });

    test("Retorna true para '[f, d, e, f]'", () => {
        const ehDupicado = checaItensDuplicados(["f", "d", "e", "f"]);
        expect(ehDupicado).toEqual(true);
    });

    test("Retorna true para '[a, a, b, c]'", () => {
        const ehDupicado = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(ehDupicado).toEqual(true);
    });
});
