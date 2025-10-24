// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video");
    const overlay = document.querySelector(".video-overlay");
    const cards = document.querySelectorAll(".card");

    // -------- Video overlay opacity on scroll --------
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let maxScroll = 400; // adjust as needed
        let opacity = Math.min(scrollY / maxScroll, 0.6); // max opacity 0.6
        overlay.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    });

    // -------- Hover effect on cards --------
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.08)";
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        });
    });

    // -------- Smooth scrolling for internal links --------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // -------- Pause/Play background video when tab inactive --------
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            video.pause();
        } else {
            video.play();
        }
    });

    // -------- Back to Top Button --------
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑ Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    // Show button after scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Scroll to top on click
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});