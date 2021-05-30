
console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDejaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array( //adiciona a lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista

console.log("Destinos Possiveis");
//console.log(salvador, saoPaulo, rioDejaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);