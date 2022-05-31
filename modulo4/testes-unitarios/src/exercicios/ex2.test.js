import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para arara", () => {
    const ehPalindromo = checaPalindromo("Arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(true);
  });

  it ("retorna true para 'A base do teto desaba'", () => {
    const ehPalindromo = checaPalindromo("A base do teto desaba");
    expect(ehPalindromo).toEqual(true);
  });
});
