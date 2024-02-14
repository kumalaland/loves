document.addEventListener('click', function(e) {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);
    
    setTimeout(function() {
      heart.remove();
    }, 2000);
  });
  
