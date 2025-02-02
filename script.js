let audio = new Audio("careless-whisper.mp3");
let canPlayMusic = true;

// Floating heart animation
function playFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💕💕💕💕💕💕💕💕💕💕💕💕💕";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.position = "absolute";
        heart.style.animation = `floatHearts ${Math.random() * 5 + 3}s linear infinite`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Play music only once per click
document.getElementById('sexYes').addEventListener('click', function() {
    if (canPlayMusic) {
        playFloatingHearts();
        audio.currentTime = 0;
        audio.play();
        canPlayMusic = false;

        setTimeout(() => {
            canPlayMusic = true;
        }, 30000);
    }
});

// Redirect to confession page after form submission
document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "confession.html";
});
