$(function(){

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

    $('.product-desc_input').styler({
        filePlaceholder: 1,
        
    });

    var mixer = mixitup('.filter-items');

    var mixer = mixitup('.secondFilter-items');

});