

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

var link = document.getElementById("keyword");

// video download button function 
function video() {
  var splited = link.value.split("?si=");
  var sag = splited[0].split("be/");
  var id = sag[1];
  var YTurl = link.replace("https://youtu.be/", "https://y2meta.tube/convert/?videoId=");
  var l1 = YTurl.concat(id);
  console.log(l1);

      
      

  window.open(l1);

   
}
var link = document.querySelector('.link');
// video download button function 
function video() {
  if (link.value != "") {
    if (link.value.indexOf("https://youtu.be/") != -1) {
      var splited = link.value.split("?si=");
      var sag = splited[0].split("be/");
      var id = sag[1];

      var YTurl = "https://y2meta.tube/convert/?videoId=" + id;

      window.open(YTurl, '_bhank');
    }
    else if (link.value.indexOf("https://youtube.com/shorts") != -1) {
      var splited = link.value.split("?si=");
      var sag = splited[0].split("shorts/");
      var id = sag[1];
      var YTurl = "https://y2meta.tube/convert/?videoId=" + id;

      window.open(YTurl, '_bhank');
    }
    else if (link.value.indexOf("https://youtube.com/watch") != -1) {
      var splited = link.value.split("?v=");
      var id = splited[1];
      var YTurl = "https://y2meta.tube/convert/?videoId=" + id;

      window.open(YTurl, '_bhank');
   
    }
  }
 
 
}
