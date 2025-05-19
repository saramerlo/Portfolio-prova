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
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img.lazy");

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    img.classList.remove("lazy");
                    lazyImageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    } else {
        // Fallback per browser più vecchi
        lazyImages.forEach(img => img.src = img.dataset.src);
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
    const isDesktop = window.innerWidth >= 768; // puoi regolare la soglia

    if (typeof gsap !== "undefined" && isDesktop) {
        gsap.registerPlugin(ScrollTrigger);

        // Animazione per i project card
        gsap.from(".project-card", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scroll-start",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        // Funzione per animare gruppi di elementi
        const animateElements = (selector, animationProps) => {
            gsap.utils.toArray(selector).forEach((element, index) => {
                gsap.from(element, {
                    ...animationProps,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                });
            });
        };

        // Vari tipi di animazioni
        animateElements(".animate-fade-up", { opacity: 0, y: 50, duration: 0.8, ease: "power2.out" });
        animateElements(".animate-fade-right", { opacity: 0, x: 100, duration: 1, ease: "power2.out" });
        animateElements(".animate-fade-left", { opacity: 0, x: -100, duration: 0.8, ease: "power2.out" });
    }
});
