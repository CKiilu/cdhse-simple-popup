$(document).foundation();
jQuery(document).ready(function ($) {
    //    open popup
    $('.cd-popup-trigger').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup').addClass('.is-visible');
    });

})
