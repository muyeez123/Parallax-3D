// Function to handle mousemove event
function handleMouseMove(event) {
  const mouseX = event.clientX;
  
  // Apply cursor position to Parallax elements
  const parallaxElements = document.querySelectorAll('.Parallax');
  parallaxElements.forEach(function(element) {
    if (!element.classList.contains('clicked')) {
      const speedX = parseFloat(element.getAttribute('data-speedx'));
      const offsetX = mouseX * speedX;
      element.style.transform = `translateX(${offsetX}px)`;
    }
  });
}

// Add mousemove event listener to document
document.addEventListener('mousemove', handleMouseMove);

// Function to handle click event
function handleClick(event) {
  const target = event.target;
  
  // Toggle the 'clicked' class for the clicked image
  if (target.classList.contains('Parallax')) {
    target.classList.toggle('clicked');
    if (target.classList.contains('clicked')) {
      // Reset the image's position to its original position
      target.style.transform = 'translateX(0)';
    }
  }
}

// Add click event listener to document
document.addEventListener('click', handleClick);
