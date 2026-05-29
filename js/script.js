/ MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// SCROLL TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// FADE-IN ANIMATION ON SCROLL
const fadeElements = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});

// DARK MODE TOGGLE
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// TESTIMONIAL SLIDER
const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
}

setInterval(() => {
    current++;

    if (current >= testimonials.length) {
        current = 0;
    }

    showTestimonial(current);

}, 3000);

// BOOKING FORM ALERT
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Booking submitted successfully!");

        bookingForm.reset();
    });
}
