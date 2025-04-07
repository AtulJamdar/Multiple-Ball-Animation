function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 1.5 + 0.5;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            
            particle.style.width = `${size}em`;
            particle.style.height = `${size}em`;
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            particle.style.animationDuration = `${animationDuration}s`;
            
            return particle;
        }

        function createParticles(count) {
            const container = document.querySelector('.particles-container');
            for (let i = 0; i < count; i++) {
                container.appendChild(createParticle());
            }
        }

        // Create 50 particles
        createParticles(50);

        // Interactive hover effect
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            particles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;

                const distanceX = mouseX - particleX;
                const distanceY = mouseY - particleY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (distance < 100) {
                    const force = (100 - distance) / 10;
                    const angle = Math.atan2(distanceY, distanceX);
                    const translateX = Math.cos(angle) * force;
                    const translateY = Math.sin(angle) * force;

                    particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
                }
            });
        });
