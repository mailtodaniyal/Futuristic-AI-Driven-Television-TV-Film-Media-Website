        // Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('active');
        });

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Video Play Button
        const playButton = document.querySelector('.play-button');
        const missionVideo = document.querySelector('.mission-video video');

        playButton.addEventListener('click', () => {
            if (missionVideo.paused) {
                missionVideo.play();
                playButton.style.opacity = '0';
                playButton.style.pointerEvents = 'none';
            } else {
                missionVideo.pause();
            }
        });

        missionVideo.addEventListener('click', () => {
            if (!missionVideo.paused) {
                missionVideo.pause();
                playButton.style.opacity = '1';
                playButton.style.pointerEvents = 'auto';
            }
        });

        // Countdown Timer
        function updateCountdown() {
            const now = new Date();
            const nextEvent = new Date('June 15, 2023 10:00:00');
            const diff = nextEvent - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Floating Particles
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Random animation duration between 10s and 20s
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }

        // Testimonial Slider
        const testimonialSlides = [
            {
                quote: "Since partnering with Closers.TV, our sales velocity has increased by 300%. The quality of talent and the speed of deployment is unmatched in the industry.",
                name: "Sarah Johnson",
                title: "VP Sales, TechCorp",
                image: "https://randomuser.me/api/portraits/women/45.jpg"
            },
            {
                quote: "The training programs transformed our sales team from average performers to top closers. We've seen a 150% increase in deal size and a 40% reduction in sales cycles.",
                name: "Michael Chen",
                title: "CEO, GrowthHack",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                quote: "As an individual closer, joining the Closers.TV community tripled my income in 6 months. The mentorship and real-world practice opportunities are invaluable.",
                name: "Jessica Williams",
                title: "Elite Closer",
                image: "https://randomuser.me/api/portraits/women/63.jpg"
            },
            {
                quote: "Their AI-driven matching system connected us with the perfect closers for our niche market. We closed $2M in new business in the first quarter alone.",
                name: "David Rodriguez",
                title: "Founder, FinTech Solutions",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
            }
        ];

        const dots = document.querySelectorAll('.slider-dot');
        const testimonialSlide = document.querySelector('.testimonial-slide');
        let currentSlide = 0;

        function showSlide(index) {
            const slide = testimonialSlides[index];
            
            testimonialSlide.innerHTML = `
                <div class="testimonial-quote">
                    ${slide.quote}
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <img src="${slide.image}" alt="${slide.name}">
                    </div>
                    <div class="author-info">
                        <h4>${slide.name}</h4>
                        <p>${slide.title}</p>
                    </div>
                </div>
            `;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto-advance slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);

        // Initialize first slide
        showSlide(0);
