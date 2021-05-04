const colecaoB = [
    {item: "mouse", custo: 30.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "teclado", custo: 80.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "pendriver", custo: 30.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "hd", custo: 200.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "ssd", custo: 300.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "gabinete", custo: 100.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"},
    {item: "monitor", custo: 800.0, desconto: 0.5, key1: "321", key2: 123, key3: "abc"}
]

const maisDeCemReais = colecaoB.filter((p) => {
    if (p.custo >= 100){
        return p.custo;
    };
})
//console.log(maisDeCemReais);

// if com arrow function

var a = 10;

function se (num) {
    if (num>1) {
        console.log(a+4);
    } 
    console.log(a);
    num > 1 ? a = a+2 : a;
    console.log(a);
}

const seArrow = num => (num > 1) ? a+3 : a;
//se(a);
console.log(a);
console.log(seArrow(a));

const filtrar = colecaoB.filter(({custo}) => custo >= 100);
//console.log(filtrar);