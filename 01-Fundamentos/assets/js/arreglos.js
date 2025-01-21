//Tipos de declaracion de arreglos

//Es la manera menos comun 
//const arr= new Array(10);


let videojuegos =['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log(videojuegos);

//Impriendo una posicion del arreglo

console.log(videojuegos[0]);

let arregloCosas=[
    true,
    123,
    'Fernando',
    1+2,
    function() {},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr.Light', [
        'Dr.Willy',
        'Woodman'
    ]]
];

//console.log(arregloCosas);

console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
//Obteniendo un dato de un arreglo dentro de un arrglo
console.log(arregloCosas[7][4][0]);