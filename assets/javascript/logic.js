$(document).ready(function(){
// global variables
var input =  $('#input');
var submit = $('#submit'); 
var apiKey = 'dc6zaTOxFJmzC';
var imageBody = $('.img-body');

// get input value from when user presses submit
submit.on("click", function(event){
    // alert('working');
    event.preventDefault();
    imageBody.empty();
    var inputValue = input.val();
    // console.log(input.val());
    getGIFs(inputValue);
    // to empty input box
    inputValue.val(' ');

});

// make a get request to giphy api with input value
function getGIFs(inputValue) {
    $.get('https://api.giphy.com/v1/gifs/search?q=' + inputValue + '&api_key=' + apiKey + '&limit=20')
    
    .done(function (data) {
        
        for( var i = 0; i < 5; i++){
        
        var gifImage = data.data[i].images.downsized.url;

        createHolder(gifImage);
    };

    });
};

function createHolder(gifImage){
var newImage = $('<img>');
newImage.attr('src', gifImage);
newImage.addClass('img-box');

imageBody.append(newImage);
}

});
