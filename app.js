$('.intro').css('color', 'red');

$('.shopping-list').css('background', 'lightblue');
$('.shopping-list').append('<li>Oranges</li>');
$('.shopping-list').prepend('<li>Coffee</li>');

$('.add-btn').click(function(e) {
    const inputValue = $('.add-to-list').val();
    $('.shopping-list').append(`<li>${inputValue}</li>`);     // ('<li>${inputValue}</li>') is the jQuery version of JavaScript
});                                                           // string concatenation: ('<li>' + inputValue + '</li>')