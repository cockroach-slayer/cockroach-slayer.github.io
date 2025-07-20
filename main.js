// Hero Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('#hero');
    
    // Add roach animation
    function createRoach() {
        const roach = document.createElement('div');
        roach.className = 'roach';
        roach.style.left = Math.random() * window.innerWidth + 'px';
        hero.appendChild(roach);
        
        // Random roach movement
        setTimeout(() => {
            roach.remove();
        }, 5000);
    }
    
    setInterval(createRoach, 3000);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Image Modal
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${image.src}" alt="${image.alt}">
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => modal.remove());
    });
});

// WebAR Launch Handler
const playButton = document.querySelector('.btn-primary');
playButton.addEventListener('click', async () => {
    try {
        // WebAR initialization code here
        const arSession = await initializeWebAR();
        launchARExperience(arSession);
    } catch (error) {
        console.error('WebAR initialization failed:', error);
        alert('Please ensure you're using a WebAR compatible device and browser.');
    }
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Team Member Hover Effect
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.classList.add('hover');
    });
    
    member.addEventListener('mouseleave', () => {
        member.classList.remove('hover');
    });
});

// Video Trailer Handler
const trailerButton = document.querySelector('.btn-secondary');
trailerButton.addEventListener('click', () => {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.scrollIntoView({ behavior: 'smooth' });
    // Auto-play trailer logic here
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 1000);
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}
