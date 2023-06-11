// FUNCION GENERA EL NUMERO ALEATORIO ENTRE 1 Y 100...
const generarNumeroAleatorio = () =>{
    return (Math.floor(Math.random()*100)+1);
}

//FUNCION PARA VALIDAR QUE EL NUMERO SEA EL CORRECTO...
const esCorrecto = (numeroAleatorio, numeroIngresado) =>{
    if (numeroIngresado === numeroAleatorio) {
        return 'Es el numero correcto!';        
    }else if (numeroIngresado > numeroAleatorio) {
        return 'El numero ingresado es mayor';
    }else{
        return 'El numero ingresado es menor';
    }
}
//SE EXPORTAN AMBAS FUNCIONES...
module.exports = {
    generarNumeroAleatorio,
    esCorrecto
};


