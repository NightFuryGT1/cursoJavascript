//los parentesis significan que hay una funcion
function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
//Cuando no se tiene el return lo que retorna es undefined
    return [1,2];
    //Esto nunca se va ejecutar
    console.log('Soy ub ncodigfo quie esta despuies del return')
}

//funcion anonima
// const saludar2 = function() {
//     console.log('Hola Mundo');
// }

const retornoDeSalkudar = saludar('Armando',40 , true); // Hola Mundo
console.log(retornoDeSalkudar [0], retornoDeSalkudar[1]);

//Funciones de Flecha

const saludarFlecha = () =>{
    console.log('Hola FLecha')
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola'+ nombre)
}


const SaludarFlecha3 =(numero1, numero2,res)=>{
    res=numero1+numero2;
    console.log('Resultado:'+res)
}
// saludarFlecha();
// saludarFlecha2('Sierra');

SaludarFlecha3(1,3);

//Ejercicios

function sumar(a,b){
        return a+b;
}

// const sumar2=(a,b) =>{
//     return a+b;
// }

//Misma Funcion pero resumida
const sumar2=(a,b)=>  a+b;


function getAleatorio(){
    return Math.random();
}

//Transformando getAleatorio en una funcion de flecha sin llaves

const getAleatorio2=()=> Math.random();

console.log(getAleatorio2());