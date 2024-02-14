document.addEventListener('click', function(e) {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = (window.scrollX + e.clientX) + 'px';
    heart.style.top = (window.scrollY + e.clientY) + 'px';

    var mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.appendChild(heart);
    } else {
        console.log('Element "main" not found');
    }

    setTimeout(function() {
      heart.remove();
    }, 2000);
});