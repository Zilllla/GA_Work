let currentImg = 0;
let finalImg = 3;

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
})
