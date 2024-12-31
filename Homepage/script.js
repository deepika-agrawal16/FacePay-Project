// Add interactivity for navigation (if needed)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default link behavior (navigation)
      
      // Alert showing the link text content
      alert(`Navigating to ${link.textContent}`);
      
      // Redirect to the appropriate page based on the link text
      if (link.textContent === 'Home') {
          window.location.href = './home.html';  // Redirect to homepage
      } else if (link.textContent === 'Login') {
          window.location.href = '../Login/index.html';  // Redirect to login/signup page
      } else {
          // Handle other links, e.g., Services, About, Contact
          alert(`This link will take you to the ${link.textContent} section.`);
      }
  });
});
