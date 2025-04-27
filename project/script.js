document.addEventListener("DOMContentLoaded", function () {
  // Visitor Counter - Fetch the visitor count
  fetch('https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/visitorCounter')
    .then(response => response.json())
    .then(data => {
      document.getElementById('visitor-count').innerText = data.count;
    })
    .catch(error => console.error('Error fetching visitor count:', error));

  // Typing animation using Typed.js
  var typed = new Typed(".multiple-text", {
    strings: ["Junior-Level Cloud Engineer", "AWS Certified"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Smooth scrolling for navbar links
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjusting for navbar height
        behavior: 'smooth'
      });
    });
  });

  // Skills Section Toggle
  const skillsHeading = document.querySelector('.skills .heading');
  const skillsContent = document.querySelector('.skills-content');

  if (skillsHeading && skillsContent) {
    skillsHeading.addEventListener('click', function () {
      skillsContent.classList.toggle('show-skills');
    });
  }

  // Add active class to navbar links on scroll
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Adjusted for navbar height
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navbarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
});
