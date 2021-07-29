$(function(){

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
 
        $("#recent-star, #recent-star2, #recent-star3").rateYo({
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

    var mixer = mixitup('.filter-items');

    var mixer = mixitup('.secondFilter-items');

});