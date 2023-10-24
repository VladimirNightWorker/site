$('nav a').on('click',function () {
    elementClick = $(this).attr("href");
    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 
    // вычитаем высоту «шапки»
    destination = $(elementClick).offset().top-145;
 
    if($.browser.safari || $.browser.chrome){
        $('body').animate( { scrollTop: destination }, 1100 );
    }else{
        $('html').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});