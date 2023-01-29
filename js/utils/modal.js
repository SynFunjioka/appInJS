$('.wrapper').click(() => {
    hideModal();
})

$('#closeModalBtn').click(() => {
    hideModal();
});

function showModal(){
    $('.wrapper').addClass('show').removeClass('hide');
    $('.wrapper').animate({
        opacity: '1'
    });

    $('.modal').animate({
        opacity: '1',
        top: '50%'
    })
}

function hideModal(){
    $('.wrapper').animate({
        opacity: '0'
    }, 500, ()=> $('.wrapper').addClass('hide').removeClass('show'));

    $('.modal').animate({
        opacity: '0',
        top: '0'
    })
}