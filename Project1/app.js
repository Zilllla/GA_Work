// create carousel
let currentImg = 0;
let finalImg = 2;

$('.next-button').on('click', () => {
  const $displayImg = $('.carousel-images').children().eq(currentImg).css('display', 'none');
    currentImg++;
  if(currentImg > finalImg) {
    currentImg = 0;
  }
  const $displayImg2 = $('.carousel-images').children().eq(currentImg).css('display', 'block');
});

$('.previous-button').on('click', () => {
  const $displayImg = $('.carousel-images').children().eq(currentImg).css('display', 'none');
    currentImg--;
  if(currentImg < 0) {
    currentImg = finalImg;
  }
  const $displayImg2 = $('.carousel-images').children().eq(currentImg).css('display', 'block');
});

// link api info on click //
// onclick for first film
$('#film1').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=blood+feast'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// onclick for second film
$('#film2').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=wizard+of+gore'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// onclick for third film
$('#film3').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=basket+case'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// onclick for 4 - sweet movie
$('#film4').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=sweet+movie'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// film 5 - forbidden zone
$('#film5').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=forbidden+zone'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// film 6 - pink pinkFlamingos
$('#film6').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=pink+flamingos'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// film 7 El Topo
$('#film7').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=el+topo'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// film 8 Holy holyMountain
$('#film8').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=holy+mountain'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
// film 9 Santa santaSangre
$('#film9').on('click', (event) => {
  $.ajax({url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=santa+sangre'
}).then(
  (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        $('#director').html(data.Director);
        $('#actors').html(data.Actors);
        $('#plot').html(data.Plot);
  })
})
