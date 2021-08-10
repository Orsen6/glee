$(function(){


    $('.header_inner-btn').on('click', function(){
        $('.nav_list').toggleClass('nav_list--active');
        $('.user_nav').toggleClass('user_nav--active');
    });
    
    $('.shop-content_wrapper-btn').on('click', function () {
        $('.shop-content_wrapper-btn').removeClass('shop-content_wrapper-btn--active');
        $(this).addClass('shop-content_wrapper-btn--active');
    });

    $('.shop-content_wrapper-btn--list').on('click', function (){
        $('.shop-filter_item').addClass('shop-filter_item--list');
    });

    $('.shop-content_wrapper-btn--grid').on('click', function (){
        $('.shop-filter_item').removeClass('shop-filter_item--list');
    });

    $('.additional-btn').on('click', function (e) {
        e.preventDefault();
        $('.additional-btn').removeClass('additional-btn--active');
        $(this).addClass('additional-btn--active');

        $('.additional-content').removeClass('additional-content--active');
        $($(this).attr('href')).addClass('additional-content--active');
    });




    $(".shop-filters_price-input").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.shop-filters_price-num--start').text(100);
            $('.shop-filters_price-num--finish').text(500);
        },
        onChange: function (data) {
            $('.shop-filters_price-num--start').text(data.from);
            $('.shop-filters_price-num--finish').text(data.to);
        },
        
    });

    $(function () {
 
        $("#recent-star, #recent-star2, #recent-star3, #product-desc_rating").rateYo({
          starWidth: "12px",
          rating    : 4,
          spacing: "5px",
          readOnly: true
        });
       
      });

    

    $('.slider-inner').slick({
        arrows: false,
        dots: true
    });

    $('.product-slider_small').slick({
        asNavFor: '.product-slider_big',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        draggable: false,
        autoplay: false
    });

    $('.product-slider_big').slick({
        asNavFor: '.product-slider_small',
        fade: true,
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        centerMode: true 
    });

    $('.inner-content_slider').slick({
        slidesToShow: 4,
        arrows: true,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/prev.png" class="slider-item_arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/next.png" class="slider-item_arrow"></button>',
        slidesToScroll: 1
    });

    $('.product-desc_input').styler({
        filePlaceholder: 1,
        
    });

    var mixer = mixitup('.filter-items');

    var mixer = mixitup('.secondFilter-items');

});