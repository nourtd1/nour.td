$(document).ready(function() {
    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: function(item) {
                return item.el.closest('.gallery-item').find('h3').text() + ' - ' + 
                       item.el.closest('.gallery-item').find('p').text();
            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
}); 