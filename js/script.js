// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

//logo carousel
const carouselTrack = document.querySelector('.carousel-track');
const logos = document.querySelectorAll('.carousel-track img');

// Add clones of logos
const cloneLogos = Array.from(logos).map(logo => logo.cloneNode(true));
cloneLogos.forEach(logo => carouselTrack.appendChild(logo));

const totalLogos = logos.length; // Number of original logos
const logoWidth = logos[0].offsetWidth; // Width of a single logo
let currentIndex = 0;

function rotateLogos() {
  currentIndex++;
  carouselTrack.style.transform = `translateX(-${currentIndex * logoWidth}px)`;

  // Move to the first logo after reaching the clones
  if (currentIndex === totalLogos) {
    setTimeout(() => {
      carouselTrack.style.transition = 'none'; // Instant move
      carouselTrack.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 1000); // After animation ends
  } else {
    carouselTrack.style.transition = 'transform 1s linear';
  }
}

// Move logos every 1 second
setInterval(rotateLogos, 1000);

document.querySelectorAll('a.nav-link').forEach(link => {
  // Add click event listener to each navigation link
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior

    // Get the target section's ID from the href attribute (removing the '#')
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId); // Find the target element by its ID

    // Calculate the height of the navbar
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Determine the target section's position and adjust for the navbar's height
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - navbarHeight;

    // Smoothly scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});