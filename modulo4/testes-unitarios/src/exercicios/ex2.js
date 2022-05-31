export function checaPalindromo(frase) {
  const ignorarEspacos = frase => 
  frase.replace(/[^\w]+|\s+/g, "").toLowerCase();
  
  return (
    ignorarEspacos(frase)
    ===
    ignorarEspacos(frase
      .split("")
      .reverse()
      .join("")
    )
  );
}
