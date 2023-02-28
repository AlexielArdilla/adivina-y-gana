//Escriba aquí su código JavaScript:

const juego = () => {

    let cantidadDeIntentos = 3;

    const numAleatorio = Math.floor((Math.random() * 10) + 1);
    console.log(numAleatorio);
    
        //const numElegido = prompt(`Adivine el núm del 1 al 10 tiene ${cantidadDeIntentos} intentos más!`);

        const numElegido = myFunction();

        escribe("Habla marica!!!");

        if (numElegido > numAleatorio) {

            cantidadDeIntentos--;

            /*alert(`El número elegido ${numElegido} es menor al número a  adivinar Cantidad de
        
        intentos restantes ${cantidadDeIntentos}`);*/
            
        myFunction(`El número elegido ${numElegido} es mayor al número a  adivinar Cantidad de
        
            intentos restantes ${cantidadDeIntentos}`);


        } else if (numElegido < numAleatorio) {

            cantidadDeIntentos--;

            /*alert(`El número elegido ${numElegido} es mayor al número a  adivinar de
        
        intentos restantes ${cantidadDeIntentos}`);*/

        myFunction(`El número elegido ${numElegido} es menor al número a  adivinar Cantidad de
        intentos restantes ${cantidadDeIntentos}`);

        } else {

            myFunction("Acertó, es un verdadero genio!!!");

        }

    }; 

    myFunction("Game over");

function myFunction() {

    var x = document.getElementById("num").value;

    document.getElementById("parrafo").innerHTML = x;

    return x;

}

function escribe(texto){

    document.getElementById("parrafo").innerHTML = texto;

}