class Form{
    constructor(formDOM, formInputs){
        this.form = formDOM;
        this.formGroups = formInputs
        //* Defaults 

        this.submitBtn = $(formDOM).children('button').click(() => this.submit());
        this.firstCheck = true;
        this.formValid = false;
    }

    submit(){
        if(this.firstCheck){
            this.formGroups.forEach(input => input.onChange());
            this.firstCheck = false;
        }

        if(this.validate()){
            this.formValid = true;
        }else{
            this.formValid = false;

        }
    }

    validate(){
        console.log('entro al validator');
        let isValid = true;
        this.formGroups.forEach(input => {
            input.validate();
            if(!input.isValid){
                isValid = false;
            }
        });
        // this.formValid = isValid;
        return isValid;
    }
    
}

class InputGroup{
    constructor(inputGroupDOM, validator = undefined, type = 'general'){
        this.inputGroup = inputGroupDOM;
        this.input = $(inputGroupDOM).children('input');
        this.inputType = type;
        this.validator = validator; //? If this is undefined means that this field isn't required.

        //* Defaults 
        this.isValid = this.validator ? false : true;
    }

    validate(){
        if(!this.validator){ return}

        let value;

        switch(this.inputType){
            case 'general':
                value = $(this.input).val();
                break;
            case 'check':
                value = $(this.input).is(':checked');
        }
       
        if(!this.validator(value)){
            this.isValid = false;
            this.inputError($(this.inputGroup));
        }else{
            this.isValid = true;
            this.inputSuccess($(this.inputGroup));
        }
    }

    onChange(){
        $(this.input).change(() => this.validate());
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
        return Regexes.email.test(email);
    }

    static password(password){
        return Regexes.password.test(password);
    }

    static linkedInURL(url){
        return Regexes.linkedInURL.test(url);
    }

    static mexNumber(phone){
        return Regexes.mexNumber.test(phone);
    }

    static required(value){
        return value ? true : false
    }
}

class Regexes{
    static email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	static password = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,16}$/;   
    // URLs
    static linkedInURL = /^(http(s)?:\/\/(([\w]{3})+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?)$/;

    static mexNumber = new RegExp(`(${mexLadas.map(({lada}) => lada).join('|')})\\d{7}`);
}