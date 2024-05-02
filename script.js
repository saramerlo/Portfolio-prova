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

//  // Aggiungi un listener per l'evento di invio del modulo
//  document.getElementById("form").addEventListener("submit", function() {
//     // Resetta il modulo dopo averlo inviato
//     resetForm();
// });
