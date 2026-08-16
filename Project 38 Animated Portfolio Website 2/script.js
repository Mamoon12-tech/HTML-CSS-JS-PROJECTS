document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('animated-intro');
    let text = intro.textContent;
    intro.textContent = '';
  
    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < text.length) {
        intro.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeEffect);
      }
    }, 150);
  });