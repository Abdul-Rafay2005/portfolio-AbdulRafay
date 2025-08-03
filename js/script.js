// Highlight active nav link based on current page
const navLinks = document.querySelectorAll('.navbar a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Optional: Scroll to top button logic (if added)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.className = "scroll-to-top";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 1.5rem;
  background: #00e0ff;
  border: none;
  color: black;
  border-radius: 50%;
  padding: 10px 15px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

document.body.appendChild(scrollBtn);

// Show button after scrolling
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
