type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/**
 * Para transpilar esse codigo para javascript usa-se o comando tsc nome_do_arquivo.ts && node nome_do_arquivo.js
 * dentro dos scripts do package.json
 * 
 * Se o arquivo se encontrar na pasta src, temos que ativar o "rootDir": "./src" no arquivo tsconfig.json
 * 
 * Para transpilar varios arquivos ts de uma vez só, devemos apenas colocar tsc no package.json
 * 
 */