//Escriba aquí su código JavaScript:

const juego = () => {

    let cantidadDeIntentos = 3;
    let flagAdivino = false;
    const numAleatorio = Math.floor((Math.random() * 10) + 1);

    while (cantidadDeIntentos > 0 && flagAdivino == false) {

        console.log(numAleatorio);

        const numElegido = prompt(`Adivine el núm del 1 al 10 tiene ${cantidadDeIntentos} intentos!`);

        if (numElegido < numAleatorio) {

            cantidadDeIntentos--;

            alert(`El número elegido ${numElegido} es menor al número a adivinar. 
        
        Cantidad de intentos restantes ${cantidadDeIntentos}`);

        } else if (numElegido > numAleatorio) {

            cantidadDeIntentos--;

            alert(`El número elegido ${numElegido} es mayor al número a  adivinar 
        
        Cantidad de intentos restantes ${cantidadDeIntentos}`);

        } else {

            alert("Acertó, es un verdadero genio!!!");

            flagAdivino = true;

        }

    }
    alert("Game over");
};



