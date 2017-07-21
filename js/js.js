

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 25,
        autoplay: 4000,
        loop: true,
        breakpoints: {
            1280: {
                slidesPerView: 5,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    });


$('.la-3-q').on('click',function(){
    // $(this).parent('div').toggleClass('q-open');
    $(this).siblings('div').slideToggle(100);
}); 

$(window).on('scroll',function(){
    var this_top = $(this).scrollTop();
    var la1_height = $('.la-p1').height(); 
    var p_height = $('header').height();

    if(this_top >= la1_height || this_top >= p_height){
        $('body').addClass('hd-bar-show'); 
    }else{
        $('body').removeClass('hd-bar-show'); 
    }
})