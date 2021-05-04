
const colecaoB = [
    {item: "mouse", custo: 30.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "teclado", custo: 80.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "pendriver", custo: 30.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "hd", custo: 200.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "ssd", custo: 300.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "gabinete", custo: 100.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "monitor", custo: 800.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"}
]



const caro = colecaoB.map(produto => produto.custo * 2);
//console.log(caro);

// mas acho q fiz nessa intençao kkkkkk
const desconto = colecaoB.map(produto => produto.custo * produto.desconto);
//console.log(desconto);

const desestruct = colecaoB.map(({custo, desconto, ...rest}) => {
    return {custo: custo * desconto, desconto, ...rest};
})
//console.log(desestruct);


//somando custos
const usarReduce = colecaoB.reduce((a,b) => a + b.custo, 0);
console.log(usarReduce);




const retornaChavesPrimeiro = colecaoB.map(({key1, key2, key3, ...rest}) => {
    return {key1, key2, key3, ...rest}
})
//console.log(retornaChavesPrimeiro);


const retornaSomenteChaves = colecaoB.map((a) => {
    return {key1: a.key1, key2: a.key2, key3: a.key3}
})
//console.log(retornaSomenteChaves);

// desustruturação:

// nomenclatura deve ser igual à do campo extraído
const {item, key2, custo} = colecaoB[0];

//console.log(item, key2, custo);