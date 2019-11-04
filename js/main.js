//Init ScrollMagic
var controller = new ScrollMagic.Controller();

// create a scene
var ourScene = new ScrollMagic.Scene({
    triggerElement: '#card1',
    duration: 1000, // the scene should last for a scroll distance of 100px
    // offset: 50 // start this scene after scrolling for 50px
}).setClassToggle('#card1', 'fade-in').addTo(controller); // assign the scene to the controller