if(window.outerWidth < 601){
    gsap.fromTo('.death',
    {x: 200, opacity: 0},{x:0, opacity: 1, duration: 1.2, delay: .8})
    gsap.fromTo('.birth',
    {x: -200, opacity: 0},{x:0, opacity: 1, duration: 1.2, delay: 1.6})
    gsap.fromTo('.analysis',
    {x: 200, opacity: 0},{x:0, opacity: 1, duration: 1.2, delay: 2.4})
}

if(window.outerWidth > 602){
    gsap.fromTo('.death',
    {x: -200, opacity: 0},{x:0, opacity: 1, duration: 1.2, delay: .8})
    gsap.fromTo('.birth',
    {transform: 'scale(1.0)', opacity: 0},{transform: 'scale(1.4)', opacity: 1, duration: 1.2, delay: 2.4})
    gsap.fromTo('.analysis',
    {x: 200, opacity: 0},{x:0, opacity: 1, duration: 1.2, delay: 1.6})
}