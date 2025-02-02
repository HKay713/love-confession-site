document.getElementById('sexYes').addEventListener('click', function() {
    playHeartsEffect();
    playMusic("careless-whisper.mp3");
});

document.getElementById('sexNo').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('desert.jpg')";
    document.body.style.backgroundSize = "cover";
    alert("Really?");
});

document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "love.html";
});

function playHeartsEffect() {
    let heartsContainer = document.createElement("div");
    heartsContainer.id = "hearts";
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heartsContainer.appendChild(heart);
    }
    heartsContainer.style.display = "block";

    setTimeout(() => {
        heartsContainer.style.display = "none";
    }, 5000);
}

function playMusic(song) {
    let audio = new Audio(song);
    audio.play();
}
