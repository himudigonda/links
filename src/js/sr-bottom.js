/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the sr revel animation
const srb = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 400,
    reset: true
});



/*FOOTER CONTACT*/
srb.reveal('.footer', { interval: 150 });
srb.reveal('.footer__title', { interval: 150 });
srb.reveal('.footer__text', { interval: 150 });
srb.reveal('.footer__social-icon', { interval: 150 });

