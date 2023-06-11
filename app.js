//SE LLAMA A LA FUNCION READLINE, PARA LEER LOS DATOS INGRESADOS...
const readlineSync = require('readline-sync');

//SE LLAMA A LAS FUNCIONES DE ADIVINANZA.JS PARA SER UTILIZADAS...
const {generarNumeroAleatorio, esCorrecto} = require('./adivinanza');

// FUNCION PARA OBTENER EL NUMERO DEL USUARIO...
const obtenerNumeroUsuario = () => {
    return parseInt(readlineSync.question('Ingresa un numero: '));
};

//  
const juegoAdivinanza = () =>{
    //NUMERO ALEATORIO
    const numeroAleatorio = generarNumeroAleatorio();
    //INICIALIZAMOS EL NUMERO INGRESADO
    let numeroIngresado = 0;

    console.log('Bienvenido a Adivina el numero secreto! ');
    console.log('Intenta adivinar un numero del 1 al 100 \n');

    while (numeroIngresado !== numeroAleatorio) {
        //si el numero es diferente del numero aleatorio, llamar a la funcion para ingresar uno nuevo
        numeroIngresado = obtenerNumeroUsuario();
        console.log(esCorrecto(numeroAleatorio, numeroIngresado));;
    }
};

//PARA QUE ARRANQUE EL JUEGO
juegoAdivinanza();

