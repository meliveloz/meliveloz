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



$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}