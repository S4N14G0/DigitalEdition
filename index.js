AOS.init();
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".PantallaPrincipal",
    start: "top top", // Cuando la parte superior de la sección fija llega a la parte superior de la ventana
    end: "top", // Ajusta esto según la longitud de tu contenido
    pin: true, // Fija la sección
    markers: false, // Activa los marcadores para ver el inicio y fin
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function smoothScroll(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
}