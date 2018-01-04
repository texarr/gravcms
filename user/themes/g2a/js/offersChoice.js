$(document).ready(function() {
    var offers = $('.offer');
    var offerToHide;
    var offerToShow;

    offers.on('click', function() {
        offerToHide = $('.offer__description[data-offer_desc = ' + $(this).parent().find('.btn--active').parent().data('offer') + ']');

        $(this).parent().find('.offer .btn').removeClass('btn--active');
        $(this).find('.btn').addClass('btn--active');

        offerToShow = $('.offer__description[data-offer_desc = ' + $(this).data('offer') + ']');

    });
});
