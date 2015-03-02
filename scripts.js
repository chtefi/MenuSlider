var sliderContainer = document.getElementsByClassName('js-slider-container')[0];

// handle click on the elements to go to the details view
// Note: using event delegation
sliderContainer.addEventListener('click', function(e) {
    if (e.target.nodeName === 'LI') {
        sliderContainer.classList.toggle('slider-container--slided');
    }
}, false);

// returns to the main menu
var backButton = document.getElementsByClassName('slider-container__view--details__back-button')[0];
backButton.addEventListener('click', function(e) {
    sliderContainer.classList.toggle('slider-container--slided');
});
