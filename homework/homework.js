//Escriba aquí su código JavaScript:
const juego = () => {
    alert("Empieza el juego!!!");

    let cantidadDeIntentos = 3;

    const numAleatorio = Math.floor((Math.random() * 3) + 1);
    console.log(numAleatorio);

    do {

        const numElegido = prompt(`Adivine el núm del 1 al 10 tiene ${cantidadDeIntentos} intentos más!`);

        if (numElegido > numAleatorio) {

            cantidadDeIntentos--;

            alert(`El número elegido ${numElegido} es menor al número a  adivinar Cantidad de
        
        intentos restantes ${cantidadDeIntentos}`);



        } else if (numElegido < numAleatorio) {

            cantidadDeIntentos--;

            alert(`El número elegido ${numElegido} es mayor al número a  adivinar de
        
        intentos restantes ${cantidadDeIntentos}`);

        } else {

            alert("Acertó, es un verdadero genio!!!");

            break;

        }

    } while (cantidadDeIntentos > 0);

    alert("Game over");

}