document.addEventListener('DOMContentLoaded', () => {

    // ==== SCROLL REVEAL ANIMATION ====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==== ADVANCED FORM HANDLING (ALL FORMS) ====
    function handleAllForms() {
        const attachListener = (formId) => {
            const form = document.getElementById(formId);
            if (!form) return;

            let status = form.querySelector('.form-status');
            if (!status) {
                const parent = form.parentElement;
                status = parent.querySelector('.form-status');
            }

            form.addEventListener("submit", async function(event) {
                event.preventDefault();
                const formData = new FormData(form);
                const button = form.querySelector('button[type="submit"]');
                const originalButtonText = button.textContent;
                
                button.textContent = 'Submitting...';
                button.disabled = true;
                status.textContent = '';

                try {
                    const response = await fetch(form.action, {
                        method: form.method,
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });
                    if (response.ok) {
                        status.textContent = "✓ Thank you! Your submission was successful.";
                        status.style.color = 'var(--accent-cyan)';
                        form.reset();
                    } else {
                        status.textContent = "Oops! There was a problem submitting your form.";
                        status.style.color = '#ff6b6b';
                    }
                } catch (error) {
                    status.textContent = "Oops! A network error occurred. Please try again.";
                    status.style.color = '#ff6b6b';
                } finally {
                    setTimeout(() => {
                        button.textContent = originalButtonText;
                        button.disabled = false;
                    }, 3000);
                }
            });
        };
        attachListener('signup-form');
        attachListener('community-form');
        attachListener('contact-form');
    }
    handleAllForms();

    // ==== ANIMATED HERO BACKGROUND ====
    // ... (The entire canvas animation code remains here, unchanged) ...
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray;
        class Particle {
            constructor(x, y, directionX, directionY, size, color) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = 'rgba(100, 255, 218, 0.2)'; ctx.fill(); }
            update() { if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; } if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; } this.x += this.directionX; this.y += this.directionY; this.draw(); }
        }
        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                particlesArray.push(new Particle(x, y, directionX, directionY, size, '#64FFDA'));
            }
        }
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        function animate() { requestAnimationFrame(animate); ctx.clearRect(0, 0, innerWidth, innerHeight); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); } connect(); }
        window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; init(); });
        init();
        animate();
    }

    // ==== NAVIGATION BAR HIDE/SHOW ON SCROLL & MOBILE TOGGLE ====
    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.querySelector('i').setAttribute('data-feather', 'menu');
                    feather.replace();
                }
            });
        });
    }
});