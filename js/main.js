if ($(window).width() >= 1024) {
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Features Scenes
    // Card 1
    var cardScene1 = new ScrollMagic.Scene({
        triggerElement: '#card1',
        duration: '145%', // the scene should last for a scroll distance of 100px
        triggerHook: 0.9
    })
        .setClassToggle('#card1', 'fade-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller

    // Card 2
    var cardScene2 = new ScrollMagic.Scene({
        triggerElement: '#card2',
        duration: '145%', // the scene should last for a scroll distance
        triggerHook: 0.9
    })
        .setClassToggle('#card2', 'fade-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Card Scene End

    // Statistics Scene
    // Card 1
    var cardStats1 = new ScrollMagic.Scene({
        triggerElement: '#card-stats-1',
        triggerHook: 0.9,
        offset: 100
    })
        .setClassToggle('#card-stats-1', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Card 2
    var cardStats1 = new ScrollMagic.Scene({
        triggerElement: '#card-stats-2',
        triggerHook: 0.9,
        offset: 100
    })
        .setClassToggle('#card-stats-2', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Card 3
    var cardStats1 = new ScrollMagic.Scene({
        triggerElement: '#card-stats-3',
        triggerHook: 0.9,
        offset: 100
    })
        .setClassToggle('#card-stats-3', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller

    // Scouts Scene
    // Card 1
    var cardScouts1 = new ScrollMagic.Scene({
        triggerElement: '#section-1',
        duration: '200%', // the scene should last for a scroll distance of 100px
        triggerHook: 0.9,
        offset: 100
    })
        .setClassToggle('#section-1', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Card 2
    var cardScouts1 = new ScrollMagic.Scene({
        triggerElement: '#section-2',
        duration: '200%', // the scene should last for a scroll distance of 100px
        triggerHook: 0.9,
        offset: 100
    })
        .setClassToggle('#section-2', 'fade-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller

    // CTA Scene
    // Text 1
    var textScene1 = new ScrollMagic.Scene({
        triggerElement: '#text-1',
        triggerHook: 0.9
    })
        .setClassToggle('#text-1', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Text 2
    var textScene2 = new ScrollMagic.Scene({
        triggerElement: '#text-2',
        triggerHook: 0.9
    })
        .setClassToggle('#text-2', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
    // Button 1
    var textScene1 = new ScrollMagic.Scene({
        triggerElement: '#button-1',
        triggerHook: 0.9
    })
        .setClassToggle('#button-1', 'slide-in')
        // .addIndicators({
        //     name: 'card scene',
        //     colorTrigger: 'white',
        //     colorStart: 'grey'
        // })
        .addTo(controller); // assign the scene to the controller
}

