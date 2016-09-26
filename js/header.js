$(window).scroll(function(){ 
 var wScroll = $(this).scrollTop();


 $('.logo').css({ 
 'transform' : 'translate(0px, '+wScroll /1 +'%)'
 });
  
 $('.tripod').css({ 
 'transform' : 'translate(0px, -'+wScroll /8 +'%)'
 });
 


});
