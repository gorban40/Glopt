"use strict";
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

    let slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        nav: false,
        speed: 1000,
        prevButton: document.querySelector('.reviews__prev'),
        nextButton: document.querySelector('.reviews__next'),
        center: true,
        mouseDrag: true,
        mode: "carousel",
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        responsive: {
            320: {
                nav: true,
                autoplay: true,
                speed: 1000,
                controls: false,
            },
            769: {
                nav: false,
                autoplay: false,
                controls: true
            }
        }
});


export default slider;