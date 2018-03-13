var pxShow=600;
var scrollSpeed=500;
var topEl = $('.back-top');
var topElChild = $('.back-top a');
$(window).scroll(function(){
    if($(window).scrollTop()>=pxShow){
        topEl.addClass('visible');
    }else{
        topEl.removeClass('visible');}
});
topElChild.on('click',function(){
            $('html, body').animate({scrollTop:0},scrollSpeed);return false;
        });