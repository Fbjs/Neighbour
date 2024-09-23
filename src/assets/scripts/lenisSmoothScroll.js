import "../styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis({
    duration: 1.2, // Aumenta este valor para mayor suavidad
    easing: (t) => t * (2 - t), // Función de easing personalizada (ease-in-out)
});


function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);