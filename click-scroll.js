

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 75;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 75;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});

var link = document.querySelector('.form-control');
// video download button function 
function video() {
  if (link.value != "") {
    if (link.value.indexOf("https://youtu.be/") != -1) {

      var YTurl = link.value.replace("https://youtu.be/", "https://www.000tube.com/watch?v=");

      window.open(YTurl, '_bhank');
    }
    else {

      var YTurl = link.value.replace("you", "000");

      window.open(YTurl, '_bhank');
    }
  
   

      
    
  }
}