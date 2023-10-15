window.sr = ScrollReveal({ reset: true });



sr.reveal('.area-1',{duration:2000});
sr.reveal('.area-2',{
    duration:2000,
    rotate: {x:0,y:80,z:0}
});
sr.reveal('.area-3',{
    duration:2000,
    rotate:{x:100,y:100,z:0}
});
sr.reveal('.area-4',{
    duration:2000, 
    distance: '150%',
    origin: 'bottom'
});

sr.reveal('.titulo',{
    duration:2000, 
    distance: '150%',
    origin: 'left'
});

sr.reveal('.texto',{
    duration:2000, 
    distance: '150%',
    origin: 'bottom'

});


