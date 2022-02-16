console.log(`Lets's get ready to party with jQuery!`);

$('article img').addClass('image-center');

$('p').eq(5).remove();

$('#title').css('font-size', function(){
    const font = Math.floor(Math.random() * 101);
    return `${font}px`;
});

$('ol').append('<li>Hello there</li>');

$('ol li').remove();
$('ol').append('p').text('I apologize for this list being here, it did not need to be included');

$('.form-control').on('keyup blur change', function(){
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
});

$('img').on('click', function(){
    $(this).remove();
});