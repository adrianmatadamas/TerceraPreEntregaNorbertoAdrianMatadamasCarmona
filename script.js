// Variables para almacenar los datos ingresados por el usuario
let num1, num2;

// Variable para almacenar el tipo de operación seleccionada
let operacion;

// Variable para almacenar el resultado de la operación
let resultado;

// Métodos para operaciones matemáticas básicas
const calculadora = {
    suma: function(a, b) {
        return a + b;
    },
    resta: function(a, b) {
        return a - b;
    },
    multiplicacion: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: división por cero";
        }
    },
    porcentaje: function(a, b) {
        return (a * b) / 100;
    }
};

// Función para capturar números ingresados por el usuario
function capturarNumeros() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
    } else {
        seleccionarOperacion();
    }
}

// Función para seleccionar la operación a realizar
function seleccionarOperacion() {
    operacion = document.getElementById('operacion').value;

    switch (operacion) {
        case "1":
            resultado = calculadora.suma(num1, num2);
            break;
        case "2":
            resultado = calculadora.resta(num1, num2);
            break;
        case "3":
            resultado = calculadora.multiplicacion(num1, num2);
            break;
        case "4":
            resultado = calculadora.division(num1, num2);
            break;
        case "5":
            resultado = calculadora.porcentaje(num1, num2);
            break;
        default:
            alert("Operación no válida. Por favor, seleccione una opción válida.");
            break;
    }
    mostrarResultado();
}

// Función para mostrar el resultado
function mostrarResultado() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `Resultado: ${resultado}`;

    // Almacenar los datos en localStorage
    const datos = {
        num1: num1,
        num2: num2,
        operacion: operacion,
        resultado: resultado
    };
    localStorage.setItem('ultimaOperacion', JSON.stringify(datos));
}

// Función para cargar la última operación almacenada
function cargarUltimaOperacion() {
    const datos = localStorage.getItem('ultimaOperacion');
    if (datos) {
        const { num1, num2, operacion, resultado } = JSON.parse(datos);
        document.getElementById('num1').value = num1;
        document.getElementById('num2').value = num2;
        document.getElementById('operacion').value = operacion;
        document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
    }
}

// Iniciar el proceso de captura de números al hacer clic en el botón
document.getElementById('calcular').addEventListener('click', capturarNumeros);

// Cargar la última operación al cargar la página
window.addEventListener('load', cargarUltimaOperacion);
