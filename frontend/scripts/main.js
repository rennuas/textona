// $(document).ready(function () {
$('.scroll-anchor').click(function (e) {
    var target = $(this).attr('href');
    var targetElement = $(target);

    $('html, body').animate({
        scrollTop: targetElement.offset().top - 100
    }, 1250);

    e.preventDefault();
});
// });