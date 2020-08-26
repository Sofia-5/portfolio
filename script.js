// ** JS CODE ** // 

$(function () {  
  portfolioApp.init ();
})

const portfolioApp = {};

portfolioApp.init = function() {
  portfolioApp.navListener();
  portfolioApp.projectListener();
}

// NAV // 
// when user is at the welcome page (header) the Nav should be white in colour
// colour changes when each i leaves the header and is completely in the main section. It will remain the same colour in the main section. 
// The icon will change depending on the section the user is on. Either it will change in colour or will change to the title of the section. 
// When the user hovers a icon, it will show the title of the section, which will replace the icon. 

// PROJECTS //
// The projects will fade in and appear as the user scrolls to that section , leading with the image, and text following behind. 


portfolioApp.navListener = function () {
 $('body').on('scroll', function() {
   
   $().addClass
 })

 $('.eventScroll').on('click', function() {
  $('#welcome').addClass('eventScroll');
 })
}

portfolioApp.projectListener = function () {
  $('.eventScroll').scroll()
 }