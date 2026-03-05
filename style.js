window.addEventListener("scroll", function(){
    const elements = document.querySelectorAll("section");
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
// Animation des sections au scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
});
// Animation compétences
const bars = document.querySelectorAll(".progress-bar");

function animateSkills() {
    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
}

window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector("#competences");
    const top = skillsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        animateSkills();
    }
});
const cards = document.querySelectorAll(".project-card, .photo-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

document.addEventListener("mousemove", function(e) {
    document.body.style.backgroundPosition =
        (e.pageX / 50) + "px " + (e.pageY / 50) + "px";
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}
