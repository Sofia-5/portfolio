// ** JS CODE ** // 



const portfolioApp = {};


// NAV // 
// when user is at the welcome page (header) the Nav should be white in colour
// colour changes when each i leaves the header and is completely in the main section. It will remain the same colour in the main section. 
// The icon will change depending on the section the user is on. Either it will change in colour or will change to the title of the section. 
// When the user hovers a icon, it will show the title of the section, which will replace the icon. 

// PROJECTS //
// The projects will fade in and appear as the user scrolls to that section , leading with the image, and text following behind. 


portfolioApp.navListener = function () {
  $('.nav li').hover(function() {
    console.log('hover');
    $(this).find('div').toggle();
    $(this).find('i').toggle();
  })
  // $('.eventScroll').on('click', function() {
  //   $('#welcome').addClass('eventScroll');
  // })
}

portfolioApp.animateHamburgerMenu = function() {
  $('.menuContainer').on('click', function() {
    console.log("working?")
    $('.menuContainer').toggleClass('animate');
    $('.menuContainer span').toggleClass('decorate');
  })
}

portfolioApp.dropDownMenu = function() {
  $('.menuContainer').on('click', function() {
    console.log("working 2?")
    $('.dropDownMenu').toggleClass('open');
  })

  $('li a').on('click', function() {
    $('.dropDownMenu').removeClass('open');
  })
}

portfolioApp.scrollDownArrow = () => {
  $('.scrollDownArrow').on('click', function() {
      $('html').animate( {
          scrollTop: $('main').offset().top}, 1000);
  });
};

portfolioApp.init = function() {
  portfolioApp.navListener();
  portfolioApp.animateHamburgerMenu();
  portfolioApp.dropDownMenu();
  portfolioApp.scrollDownArrow();
}

$(function () {  
  portfolioApp.init ();
})