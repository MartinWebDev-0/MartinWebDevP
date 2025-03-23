// Handle the click on the SVG icon to show the menu
document.getElementById('language-icon').addEventListener('click', function(event) {
    const menu = document.getElementById('language-menu');
    const isMenuVisible = menu.classList.contains('hidden');
    
    // Toggle visibility of the menu by toggling the 'hidden' class
    menu.classList.toggle('hidden', !isMenuVisible);
    
    // Position the menu near the SVG icon
    const iconRect = event.target.getBoundingClientRect();
    menu.style.left = `${iconRect.left}px`;
    menu.style.top = `${iconRect.bottom + 5}px`; // 5px below the icon
  });
  
  document.querySelectorAll('#language-menu li').forEach(item => {
    item.addEventListener('click', function() {
      const language = item.getAttribute('data-lang');
      
      
    });
  });
  



  //scroll animation
  document.getElementById("scroll-animation").addEventListener("click", function() {
    window.scrollBy({
      top: window.innerHeight, 
      left: 0,
      behavior: "smooth"  
    });
  });

  //scroll back up

  document.getElementById("scroll-up").addEventListener("click", function() {
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });