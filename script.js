/* =========================================================
   JULSHI PATEL — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Close menu when clicking a navigation link */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   02. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   03. ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();


/* =========================================================
   04. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".about-visual, " +
    ".about-info-grid, " +
    ".skills-intro, " +
    ".skill-card, " +
    ".skills-summary, " +
   ".projects-intro, " +
   ".projects-cta, " +
   ".project-card, " +  
   ".journey-item, " +
    ".workflow-block, " +
    ".contact-placeholder"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   05. SUBTLE DATA PARTICLE MOVEMENT
========================================================= */

const particles =
    document.querySelectorAll(
        ".data-particles span"
    );


particles.forEach((particle, index) => {

    particle.addEventListener(
        "animationiteration",
        () => {

            particle.style.left =
                `${Math.random() * 95}%`;

            particle.style.top =
                `${Math.random() * 90}%`;

        }
    );

});


/* =========================================================
   06. DASHBOARD MOUSE MOVEMENT
========================================================= */

const dashboard =
    document.querySelector(
        ".analytics-dashboard"
    );


if (
    dashboard &&
    window.matchMedia("(pointer: fine)").matches
) {

    dashboard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                dashboard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            dashboard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

        }
    );


    dashboard.addEventListener(
        "mouseleave",
        () => {

            dashboard.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        }
    );

}


/* =========================================================
   07. NUMBER ANIMATION
========================================================= */

function animateNumber(
    element,
    target,
    duration = 1500
) {

    let start = 0;

    const startTime =
        performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const easedProgress =
            1 - Math.pow(
                1 - progress,
                3
            );


        const current =
            start +
            (target - start) *
            easedProgress;


        element.textContent =
            Math.floor(current).toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }


    requestAnimationFrame(update);

}


/* =========================================================
   08. REDUCED MOTION CHECK
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (reducedMotion) {

    document.documentElement.classList.add(
        "reduced-motion"
    );

}


/* =========================================================
   09. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(
        ".footer p"
    );


if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Julshi Patel. All rights reserved.`;

}


/* =========================================================
   END
========================================================= */