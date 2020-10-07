// Eventually, we'll add some code here

/* Andrews-MacBook-Air:WebApp_Builder andrewrea$ git branch -M main
Andrews-MacBook-Air:WebApp_Builder andrewrea$ git remote add origin git@github.com:AndrewsRea/WebApp_Builder.git
Andrews-MacBook-Air:WebApp_Builder andrewrea$ git push -u origin main */

$('.intro').css('color', 'red');

$('.shopping-list').css('background', 'lightblue');
$('.shopping-list').append('<li>Oranges</li>');

$('.add-btn').on('click', function(e) {
    $('.shopping-list').append(input.value);
})