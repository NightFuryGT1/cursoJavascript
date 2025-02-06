let personaje = {
    nombre: 'Tony Stark',
    codeName:'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes:['Mark1','Mark V', 'Hulk Buster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};
console.log(personaje)
console.log('Nombre', personaje.nombre)
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log(personaje.trajes.length);
//obteniendo el ultimo elemento del arreglo
console.log(personaje.trajes[personaje.trajes.length - 1]);

//Mas detalles

