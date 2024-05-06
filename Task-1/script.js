window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#555'; // Change background color when scrolled
  } else {
      navbar.style.backgroundColor = '#333'; // Change back to original color when not scrolled
  }
});

var menuItems = document.querySelectorAll('nav a');

menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
      this.style.color = '#ffffff'; // Change font color on hover
  });
  
  item.addEventListener('mouseout', function() {
      this.style.color = '#fff'; // Change back to original font color when mouse leaves
  });
});