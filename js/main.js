if ($(window).width() >= 1024) {
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // create a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#card1',
        duration: 1000, // the scene should last for a scroll distance of 100px
        triggerHook: 0.8
        // offset: 50 // start this scene after scrolling for 50px
    })
        .setClassToggle('#card1', 'fade-in')
        .addIndicators({
            name: 'card scene',
            colorTrigger: 'white',
            colorStart: 'grey'
        })
        .addTo(controller); // assign the scene to the controller

    // create a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#card2',
        duration: 1000, // the scene should last for a scroll distance of 100px
        triggerHook: 0.8
        // offset: 50 // start this scene after scrolling for 50px
    })
        .setClassToggle('#card2', 'fade-in')
        .addIndicators({
            name: 'card scene',
            colorTrigger: 'white',
            colorStart: 'grey'
        })
        .addTo(controller); // assign the scene to the controller

}

