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

function ans() {
    document.getElementById("yesbtn1").style.backgroundColor = "green";
    document.getElementById("nobtn1").style.backgroundColor = "red"
}

function ans2() {
    document.getElementById("yesbtn2").style.backgroundColor = "green";
    document.getElementById("nobtn2").style.backgroundColor = "red"
}

function ans3() {
    document.getElementById("superyes").style.backgroundColor = "green";
    document.getElementById("mainn").style.backgroundColor = "green"
}