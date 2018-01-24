// initial array of different sports
var sports = ['Tennis', 'Soccer', 'Basketball', 'Football', 'Baseball', 'Curling', 'Skiing'];

// variable to store api key
var apiKey = 'dc6zaTOxFJmzC';

function displaySportsGifs(){
// clears container
    $("#sportsView").empty();

    var sport = $(this).attr('data-name');

    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + sport + '&api_key=' + apiKey + '&limit=10';

 $.ajax({url: queryURL, method:'GET'})
    .done(function(response) {
        var results = response.data;
    // deals with the GIF's rating
        for(var i=0; i < results.length; i++){

            if (results[i].rating == "r" || results[i].rating == "pg-13"){

            }
            else{

                var rating = results[i].rating;

        
                var y = $('<p>').text( "Rating: " + rating);

                var sportsGif = $('<img>');

                sportsGif.attr('src', results[i].images.fixed_height_still.url);
                sportsGif.attr('data-still', results[i].images.fixed_height_still.url);
                sportsGif.attr('data-animate', results[i].images.fixed_height.url);
                sportsGif.attr('data-state', 'still');
                sportsGif.addClass('sportsGif');

        $("#sportsView").append(y);
        $("#sportsView").append(sportsGif);   
    }
}

// pausing and playing GIFs by clicking on them
$('.sportsGif').on('click', function(){
    
    var state = $(this).attr('data-state');
    console.log(state)

    if (state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

    });

}
// function to render buttons
function buttonsAppear(){
    $('#renderedButtons').empty();

    // loop through sports array
    for (var i = 0; i < sports.length; i++){

    
    var x = $('<button>')
    x.addClass('sport');
    x.addClass("btn btn-success");
    x.addClass("btn btn-primary btn-lg");
    x.attr('data-name', sports[i]);
    x.text(sports[i]);
    // adds button to html
    $('#renderedButtons').append(x);


 }
}

// for click event 
$('#addSportGif').on('click', function(){
// caotures input from user
    var sport = $('#sportInput').val().trim();
// adds sport to array
    sports.push(sport);

    buttonsAppear();

})



$(document).on('click', '.sport', displaySportsGifs);
// calling function that renders buttons again
buttonsAppear();