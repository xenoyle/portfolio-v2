function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function adjustScroll() {
  if (window.location.hash) {
    const headerHeight = document.querySelector('#desktop-nav').offsetHeight;
    window.scrollTo(0, window.pageYOffset - headerHeight);
  }
}
  
// Call this function when the page loads and when the hash changes
window.addEventListener('load', adjustScroll);
window.addEventListener('hashchange', adjustScroll);

// Smooth scroll function
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var headerOffset = document.querySelector('#desktop-nav').offsetHeight;
  var additionalOffset = -100; // Adjust this value as needed
  var distance = targetPosition - headerOffset - additionalOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Add click event listeners to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = this.getAttribute('href');
    smoothScroll(target, 1000); // 1000ms duration of scroll animation
  });
});

// Adjust scroll position on page load if there's a hash in the URL
window.addEventListener('load', function() {
  if (window.location.hash) {
    setTimeout(function() {
      smoothScroll(window.location.hash, 1);
    }, 0);
  }
});

window.addEventListener('scroll', function() {
  const nav = document.querySelector('#desktop-nav');
  
  // Calculate how far the user has scrolled
  const scrollTop = window.scrollY;

  const originalHeight = 124; // Initial height
  
  // Adjust the height and font size based on scroll position
  const newHeight = Math.max(60, 100 - scrollTop / 10); // Minimum height of 60px
  
  // Apply the new styles
  nav.style.height = newHeight + 'px';

  if (scrollTop === 0) {
    nav.style.height = originalHeight + 'px';
  }
});
