$("div#images").sequencer({
        count: 21,
        path: "./images",
        ext: "png"
      }, function() {
        $("div#preload").hide();
      });

$(function () {
             var $win = $(window);
 
             $win.scroll(function () {
                 if ($win.scrollTop() == 0)
                     $('.circle').toggleClass('hidden');
                 else if ($win.height() + $win.scrollTop()
                                == $(document).height()) {
                     $('.circle').toggleClass('hidden');
                 }
             });
});



/*$(function(){
  setTimeout(function(){
$('.fly-in-text').removeClass('hola');
  },500);
})*/
$(document).ready(function()
{
    /* smooth scrolling for scroll to top */
  $('#to-top').bind('click', function()
  {
    $('body,html').animate({
      scrollTop: 0}, 
      2500);
  });

  //Easing Scroll replace Anchor name in URL and Offset Position
  $(function(){
    $('a[href*=#]:not([href=#])').click(function()
    {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -420
          }, 3500, 'easeOutBounce');
          return false;
        }
      }
    });
  });
});



$(document).ready(function()
{
  
  
  $("#menu-close").click(function(e)              
  {

    $("#sidebar-wrapper").toggleClass("active");      
    e.preventDefault();                 
    
  
  });                          

  $("#menu-toggle").hover(function(e)            
  {
    $("#sidebar-wrapper").toggleClass("active",true);   
    e.preventDefault();                  
  });

  $("#menu-toggle").bind('click',function(e)      
  {
    $("#sidebar-wrapper").toggleClass("active",true);  
    e.preventDefault();                  
  });                            

  $('#sidebar-wrapper').mouseleave(function(e)  

  {

    $('#sidebar-wrapper').toggleClass('active',false);   

    e.stopPropagation();     

                                
    e.preventDefault();                   
  });
});

$('.about-me').on('click', function(){
  $('.three-section').addClass('hidden');
  $('.first-section').addClass('hidden');
 $('.second-section').removeClass('hidden');
 $('.six-section').addClass('hidden');
 $('#to-top').addClass('hidden');
})
$('.myWorks').on('click', function(){
  $('.six-section').removeClass('hidden');
  $('.three-section').addClass('hidden');
  $('.first-section').addClass('hidden');
 $('.second-section').addClass('hidden');
 $('#to-top').addClass('hidden');
})

$('.home').on('click', function(){
  $('.three-section').addClass('hidden');
  $('.first-section').removeClass('hidden');
 $('.second-section').addClass('hidden');
  $('#to-top').removeClass('hidden');
  $('.six-section').addClass('hidden');

})
$('.contactMe').on('click', function(){
  $('.first-section').addClass('hidden');
 $('.second-section').addClass('hidden');
 $('.three-section').addClass('hidden');
 $('#to-top').addClass('hidden');
 $('.six-section').addClass('hidden');
})

$('.skills').on('click', function(){
  $('.first-section').addClass('hidden');
 $('.second-section').addClass('hidden');
 $('.three-section').removeClass('hidden');
 $('#to-top').addClass('hidden');
 $('.six-section').addClass('hidden');
})

  $(function(){
  setTimeout(function() {
     $('#splash').fadeOut(500);
  }, 5000);
  });

 /* Opacity Logo*/ 

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

 $('.logo, .logo2').css({
  opacity: function() {
    var elementHeight = $(this).height(),
        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.05) + 0.0;

    return opacity;
  }
});
});
