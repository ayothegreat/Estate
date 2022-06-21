$(document).ready(function () {
  

  
  
  
  
    $('#menu').hide();
    $('.menubar').click(function(){
        $('#menu').slideToggle(1000);
    })
   
  $(".accordion-head").click(function(){

    $(this).next().slideToggle(1000);
   
  });
  
  

  var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide_container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 12000); // Change image every 2 seconds
}


$('.counter').counterUp({
    delay: 50,
    time: 10000
});

    
    
    

})
