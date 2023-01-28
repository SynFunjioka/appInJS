/**
 * @param formDOM is of type DOM
 */
class Form{
    constructor(formDOM){
        this.form = formDOM;

        this.formGroups = $(this.form).children('.form-group').toArray().map(group => {
            return new InputGroup(group, Validators.email)
        });
        //* Defaults 

        this.submitBtn = $(formDOM).children('button').click(() => this.submit());
        this.firstCheck = false;
        this.formValid = false;
    }

    submit(){
        // console.log('INPUTS', this.formGroups);
        this.formGroups.forEach(input => {
            input.validate()
        });

        /* $(this.formGroups).children('input').each((index, dom) => {
            // console.log('funciona la clase', dom);
            const input = $(dom).attr('name');
    
            // switch(input){
            //     case 'email':
            //         validate(dom, emailValidator);
            //         $(dom).change(() => validate(dom, emailValidator));
            // }
        }); */
    }
}

class InputGroup{
    constructor(inputGroupDOM, validator = undefined){
        this.inputGroup = inputGroupDOM;
        this.input = $(inputGroupDOM).children('input');
        console.log(this.input);
        this.validator = validator; //If this is undefined means that this field isn't required

        //* Defaults 
        this.isValid = this.validator ? false : true;
    }

    validate(){
        if(!this.validator){ return}

        const value = $(this.input).val();
    
        if(!this.validator(value)){
            this.isValid = false;
            this.inputError($(this.inputGroup));
        }else{
            this.isValid = true;
            this.inputSuccess($(this.inputGroup));
        }
    }

    onChange(){
        this.validate();
    }

    //* MODIFIERS
    inputError(formGroup){
        $(formGroup).removeClass('form-group_success');
        $(formGroup).addClass('form-group_error');
    }
    
    inputSuccess(formGroup){
        $(formGroup).removeClass('form-group_error');
        $(formGroup).addClass('form-group_success');
    }
}

class Validators{
    static email(email){
        return Regexs.email.test(email);
    }
}

class Regexs{
    static email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}