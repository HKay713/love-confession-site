let audio = new Audio("careless-whisper.mp3");
let canPlayMusic = true;

document.getElementById('sexYes').addEventListener('click', function() {
    if (canPlayMusic) {
        playFloatingHearts();
        playMusic();
        canPlayMusic = false;

        setTimeout(() => {
            canPlayMusic = true;
        }, 30000);
    }
});

function playMusic() {
    audio.currentTime = 0;
    audio.play();
}

function playFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
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
