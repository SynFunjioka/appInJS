
let form = new Form($('form'));

let button = $(form).children('button');

/**
 * First check: boolean
 * Form validate : boolean
 * 
 */

// function submit(){
//     $('.form-group input').each((index, dom) => {
//         const input = $(dom).attr('name');

//         // TODO: Agrgar un onChangeEvent para detectar cuando el input este correcto y validado
//         switch(input){
//             case 'email':
//                 validate(dom, emailValidator);
//                 $(dom).change(() => validate(dom, emailValidator));
//         }
//     });
// }

function validate(inputDOM, validatorFn){
    const value = $(inputDOM).val();

    if(!validatorFn(value)){
        console.log('Error');
        inputError($(inputDOM).parent());
    }else{
        inputSuccess($(inputDOM).parent());
    }
}

// * MODIFIERS

function inputError(formGroup){
    console.log(formGroup);
    $(formGroup).removeClass('form-group_success');
    $(formGroup).addClass('form-group_error');
}

function inputSuccess(formGroup){
    console.log(formGroup);
    $(formGroup).removeClass('form-group_error');
    $(formGroup).addClass('form-group_success');
}