//First we declare the inputs
let formInputs = [
    new InputGroup($('form .form-group').has('input[name=email]'), Validators.email),
    new InputGroup($('form .form-group').has('input[name=password]'), Validators.password),
    new InputGroup($('form .form-group').has('input[name=linkedinURL]'), Validators.linkedInURL),
    new InputGroup($('form .form-group').has('input[name=tel]'), Validators.mexNumber),
    new InputGroup($('form .form-group').has('input[name=checkbox]'), Validators.required, 'check'),
]
console.log('FORM INPUTS', formInputs);

let form = new Form($('form'), formInputs);

let button = $(form).children('button');


/**
 * *-------------------------EXPLICACIÓN DE FUNCIONAMIENTO -------------------------
 * Este código funciona de la siguiente manera:
 * Primeramente se separó el código en diferentes archivos js para mantener
 * el código lo más ordenado y legible posible. El archivo index.js es el principal
 * mientras que el validator.js es el encargado de contener las clases necesarias
 * para las validaciones, como por ejemplo la clase Form, FormGroup, Validators y 
 * Regexes. Cada clase contiene lo necesario para tener separadas las funciones que 
 * se realizarán y resulte sencillo su ejecución y si es necesario implementar nuevos
 * validadores.
 * Las validaciones que se implementaron se llevan a cabo gracias a la ejecución de 
 * expresiones regulares, todas ellas fueron creadas y probadas por la siguiente 
 * página: https://regexr.com/
 */