// create carousel
let currentImg = 0;
let finalImg = 2;

$('.next-button').on('click', () => {
  const $displayImg = $('.carousel-images').children().eq(currentImg).css('display', 'none');
    currentImg++;
  if(currentImg > finalImg) {
    currentImg = 0;
  }
  const $displayImg2 = $('.carousel-images').children().eq(currentImg);
  $displayImg2.css('display', 'block');
});

$('.previous-button').on('click', () => {
  const $displayImg = $('.carousel-images').children().eq(currentImg);
  $displayImg.css('display', 'none');
    currentImg--;
  if(currentImg < 0) {
    currentImg = finalImg;
  }
  const $displayImg2 = $('.carousel-images').children().eq(currentImg);
  $displayImg2.css('display', 'block');
});

// link api info on click
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
// onclick for third film
$('#film3').on('click', (event) => {
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
