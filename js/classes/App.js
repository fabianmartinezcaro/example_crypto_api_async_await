import { cargarCriptomonedas, enviarCotizacion, leerValor } from "../funciones.js";
import { criptomoneda, formulario, moneda } from "../selectores.js";

export default class App{

    constructor() {
        this.initApp();
    }

    initApp(){

        document.addEventListener('DOMContentLoaded', () => {

            cargarCriptomonedas();

            formulario.addEventListener('submit', enviarCotizacion);
            criptomoneda.addEventListener('change', leerValor);
            moneda.addEventListener('change', leerValor);

        })

    }

}