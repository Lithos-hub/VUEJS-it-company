export function navSmooth() {
        const navLinks = document.querySelectorAll('.timelineLink');

        for(let n in navLinks) {
            if(navLinks.hasOwnProperty(n)){
                navLinks[n].addEventListener('click', e => {
                    e.preventDefault();
                    document.querySelector(navLinks[n].hash)
                    .scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }
}

export function spyScrolling() {
    const sections = document.querySelectorAll('.section-divider');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for(let section in sections) {
            if(sections.hasOwnProperty(section) && sections[section].offsetTop <= scrollPosition){
                const id = sections[section].id;
                document.querySelector('.stepper-active').classList.remove('stepper-active');
                document.querySelector(`a[href*=${id}]`).classList.add('stepper-active');
                

            }
        }
    }
    
}