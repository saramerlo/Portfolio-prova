//chiudi menù mobile

document.addEventListener("DOMContentLoaded", function () {
    // Aggiungi un gestore di eventi per il clic su tutto il documento
    document.addEventListener("click", function (event) {
        // Verifica se il clic è avvenuto all'interno della navbar
        let isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
        // Verifica se il clic è avvenuto all'interno del menu mobile
        let isClickInsideMenu = document.getElementById('navbarSupportedContent').contains(event.target);
        // Se il clic è avvenuto al di fuori della navbar e del menu mobile, chiudi il menu
        if (!isClickInsideNavbar && !isClickInsideMenu) {
            document.getElementById('navbarSupportedContent').classList.remove('show');
        }
    });
});

// btn backto top nascosto
document.getElementById('toTop').style.display = 'none';
// comparsa btn backto top
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 400) {
        document.getElementById('toTop').style.display = 'inline';
    } else {
        document.getElementById('toTop').style.display = 'none';
    }
});

// filtri
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const projects = document.querySelectorAll(".col-md-4");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
             // Rimuovi la classe 'active' da tutti i pulsanti di filtro
             filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Aggiungi la classe 'active' al pulsante cliccato
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            projects.forEach(project => {
                if (category === "all" || project.classList.contains("category-" + category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});


// lazy load
document.addEventListener("DOMContentLoaded", function(){
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImage.style.visibility = "visible"; // Mostra l'immagine
                    lazyImage.style.opacity = 1; // Imposta l'opacità a 1 per renderla visibile gradualmente
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Gestione fallback per browser senza Intersection Observer
    }
});

document.querySelectorAll('#gallery img').forEach((img, index) => {
  console.log(`Image found: ${img.src}, Index: ${index}`);
  img.addEventListener('click', () => {
    const carousel = document.querySelector('#galleryCarousel');
    console.log(`Carousel element: ${carousel}`);
    const carouselInstance = new bootstrap.Carousel(carousel);
    console.log(`Going to slide: ${index}`);
    carouselInstance.to(index); // Vai allo slide corretto
  });
}); 


// gallery animation

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project-card", {
        opacity: 0,
        y: 50, 
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scroll-start",
            // markers:true, 
            start: "top 85%", // L'animazione parte quando il top della sezione entra nell'85% della viewport
            toggleActions: "play none none none",
            once: true, // Assicura che l'animazione non si ripeta quando si torna su
        },
    });
    document.querySelectorAll(".animate-fade-up").forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1, // Ritardo progressivo (effetto a cascata)
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
            },
        });
    });

    document.querySelectorAll(".animate-fade-right").forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            x: 100,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".animate-fade-right",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
            },
        });
    });

    document.querySelectorAll(".animate-fade-left").forEach((element, index) => {
        gsap.from(element, {
        opacity: 0,
        y: 50, 
        duration: 0.8,
        stagger: 0.2, // Ritardo tra gli elementi
        ease: "power2.out",
        scrollTrigger: {
            // markers:true, 
            trigger: ".animate-fade-left",
            start: "top 85%", // L'animazione parte quando l'elemento entra nel 85% della viewport
            toggleActions: "play none none none",
            once: true, // L'animazione avviene solo una volta
            },
        });
    });
});
