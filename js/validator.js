/**
 * @param formDOM is of type DOM
 */
class Form{
    constructor(formDOM){
        this.form = formDOM;
        this.formGroups = $(this.form).children('.form-group');
        this.submitBtn = $(formDOM).children('button').click(() => this.submit());
        
        this.firstCheck = false;
        this.formValid = false;
    }

    submit(){
        $(this.formGroups).children('input').each((index, dom) => {
            console.log('funciona la clase', dom);
            const input = $(dom).attr('name');
    
            // TODO: Agrgar un onChangeEvent para detectar cuando el input este correcto y validado
            switch(input){
                case 'email':
                    validate(dom, emailValidator);
                    $(dom).change(() => validate(dom, emailValidator));
            }
        });
    }
}

class input{
    constructor(inputDOM){
        this.input = inputDOM;
    }
    isValid = false;
}

class Validators{
    static emailValidator(email){
        return Regexs.email(email);
    }
}

class Regexs{
    static email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}