$('.btn').click(submit);

function submit(){
    $('.form-group input').each((index, dom) => {
        const input = $(dom).attr('name');

        // TODO: Agrgar un onChangeEvent para detectar cuando el input este correcto y validado
        switch(input){
            case 'email':
                validate(dom, emailValidator)
        }
        // console.log(value);
        // console.log($(dom).attr('name'));
    });
}

function validate(input, validatorFn){
    const value = $(input).val();

    if(!validatorFn(value)){
        console.log('Error');
        inputError($(input).parent())
    }
}


// * VALIDATORS

function emailValidator(email){
    return emailRgx.test(email);
}

// * REGEX
const emailRgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// * MODIFIERS

function inputError(formGroup){
    console.log(formGroup);
    $(formGroup).addClass('form-group_error');
}