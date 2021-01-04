gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);


gsap.fromTo('.death',  
{
    x: '-2000', opacity: 0
},
{
    x: 0, duration: 1.2, ease: 'none', opacity: 1,
});



gsap.fromTo('.birth',  
{
    transform: 'scale(1)'
},
{
    transform: 'scale(1.4)', duration: 2, ease: 'none'
});


gsap.fromTo('.analysis',  
{
    x: '2000', opacity: 0
},
{
    x: 0, duration: 1.2, ease: 'none', opacity: 1,
});



/*  Overlay divs animation */

$('.overlay').css({
    left: '0'
})


gsap.to('.overlay div:nth-of-type(1)', {y: 1000, duration: 2})
gsap.to('.overlay div:nth-of-type(2)', {y: 1000, duration: 2, delay: .4})
gsap.to('.overlay div:nth-of-type(3)', {y: 1000, duration: 2, delay: .8, onComplete: () => {$('.overlay').css({
    left: '-10000px'
})}})
/* =================== */

gsap.fromTo('.boshtech', 
{
    x: 1000, opacity: 0
},
{
    x: 0, opacity: 1, duration: 2, delay: 1
})