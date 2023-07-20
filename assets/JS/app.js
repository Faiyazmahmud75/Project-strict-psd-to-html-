// sticky menuBar
  $(function (){
    
          $(window).scroll(function(){
            let myScreen = $(this).scrollTop();
            if (myScreen > 400){
              $('.menuBar').addClass('scroll-effect');
            } 
            else{
              $('.menuBar').removeClass('scroll-effect');
            }
          });
        });
  
// venoBox plugin initialization
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'bounce'
});

// back to top button visiblity function 

window.addEventListener('scroll', function() {
    let myScreen = window.scrollY;
    if (myScreen > 500){
        document.querySelector(".back-to-top").style.display = "block";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
});
