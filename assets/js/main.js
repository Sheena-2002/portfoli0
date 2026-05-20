/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*==================== EMAILJS SETUP ====================*/
// Initialize EmailJS with your Public Key
emailjs.init("sFyFSTK4Zsft4VhL1");

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = {
            from_name: this.name.value,
            from_email: this.email.value,
            message: this.message.value
        };
        
        // Send email using EmailJS (use the template shown in your dashboard)
        emailjs.send("service_g472v4t", "__ejs-test-mail-service__", formData)
            .then(function(response) {
                console.log('EmailJS response:', response);
                contactMessage.style.display = 'block';
                contactMessage.style.color = 'green';
                contactMessage.textContent = '✓ Message sent successfully! I will get back to you soon.';
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    contactMessage.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                console.error('EmailJS error:', error);
                contactMessage.style.display = 'block';
                contactMessage.style.color = 'red';
                // Show more details to help debugging
                const errMsg = (error && error.text) ? error.text : (error && error.message) ? error.message : 'Failed to send message. Check console for details.';
                contactMessage.textContent = `✗ ${errMsg}`;
            });
    });
} 
