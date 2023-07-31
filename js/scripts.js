let menuToggle = document.querySelector('.toggle');
let navegacion = document.querySelector('.navegacion');
let sectionMain = document.querySelector('.section-main');
let navLink = document.querySelector('body');

let bandera = true;

colocarParticulas(bandera);

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    navegacion.classList.toggle('active');
    sectionMain.classList.toggle('active');
    bandera = false;
    colocarParticulas(bandera);
}


function colocarParticulas(bandera) {
    // if (bandera === true) {
    //     navLink.children[0].id = "particles-js";
    //     navLink.children[1].id = " ";
    // } else {
    //     navLink.children[0].id = " ";
    //     navLink.children[1].id = "particles-js";
    // }
    console.log(bandera);
    console.log(navLink.children[0])
    console.log(navLink.children[2])
}



// particlesJS(
//     {
//         "particles": {
//             "number": {
//                 "value": 100,
//                 "density": {
//                     "enable": true,
//                     "value_area": 800
//                 }
//             },
//             "color": {
//                 "value": "#2196f3"
//             },
//             "shape": {
//                 "type": "triangle",
//                 "stroke": {
//                     "width": 0,
//                     "color": "#000000"
//                 },
//                 "polygon": {
//                     "nb_sides": 3
//                 },
//                 "image": {
//                     "src": "img/github.svg",
//                     "width": 100,
//                     "height": 100
//                 }
//             },
//             "opacity": {
//                 "value": 0.7,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 1,
//                     "opacity_min": 0.1,
//                     "sync": false
//                 }
//             },
//             "size": {
//                 "value": 5,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 40,
//                     "size_min": 0.1,
//                     "sync": false
//                 }
//             },
//             "line_linked": {
//                 "enable": true,
//                 "distance": 180,
//                 "color": "#294d64",
//                 "opacity": 0.4,
//                 "width": 1
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 8,
//                 "direction": "none",
//                 "random": false,
//                 "straight": false,
//                 "out_mode": "bounce",
//                 "bounce": false,
//                 "attract": {
//                     "enable": true,
//                     "rotateX": 600,
//                     "rotateY": 1200
//                 }
//             }
//         },
//         "interactivity": {
//             "detect_on": "canvas",
//             "events": {
//                 "onhover": {
//                     "enable": false,
//                     "mode": "repulse"
//                 },
//                 "onclick": {
//                     "enable": false,
//                     "mode": "push"
//                 },
//                 "resize": true
//             },
//             "modes": {
//                 "grab": {
//                     "distance": 400,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "bubble": {
//                     "distance": 400,
//                     "size": 40,
//                     "duration": 2,
//                     "opacity": 8,
//                     "speed": 3
//                 },
//                 "repulse": {
//                     "distance": 200,
//                     "duration": 0.4
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 },
//                 "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         },
//         "retina_detect": true
//     }
// )

