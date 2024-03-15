var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.left = "0";
        }

        function hideMenu(){
            navLinks.style.left = "-200px"
        }


        const presentation = document.querySelector('.presentation');
        const imageMeuf = document.querySelector('.image-meuf');
        const menu = document.querySelectorAll('.bulle');

        window.addEventListener('load', () => {

            const TL = gsap.timeline({paused:true});

            TL.from(presentation, 1, {transform: "scale(0)", ease: "power2.out"})
            .from(imageMeuf, 1, {transform: "scale(0)", ease: "power2.out"})
            .staggerFrom(menu, 0.5, {top: -200, ease: "power2.out"}, 0.3, '-=1');
            


            TL.play();

        })


        const firstParagraph = document.querySelector('.para1');
        const thirdParagraph = document.querySelector('.para3');

        function animateParagraphs() {
            firstParagraph.classList.add('active');
            thirdParagraph.classList.add('active');
        }

        function handleScroll () {
            const aboutMeSection = document.querySelector('.aboutme');
            const aboutMeSectionTop = aboutMeSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (aboutMeSectionTop < windowHeight / 2 && aboutMeSectionTop > -windowHeight / 2) {
                animateParagraphs();

            }
        }

        function loop() {
            handleScroll();
            window.requestAnimationFrame(loop);
        }

        loop();


        




        window.addEventListener('DOMContentLoaded', () => {

            const startDate = new Date('2023-11-15');
            const timerElement = document.getElementById('timer');

            setInterval(() => {
                const now = new Date();
                const elapsedTime = now - startDate;

                const days = Math.floor(elapsedTime / (1000*60*60*24));

                timerElement.textContent = days;

            }, 1000);
        });
