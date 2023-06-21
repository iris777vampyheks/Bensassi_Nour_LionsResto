const playIcon = document.querySelector('.play-icon');
const video = document.getElementById('video-player');
const exitIcon = document.getElementById('exit-icon');

playIcon.addEventListener('click', () => {
    playIcon.style.display = 'none';
    video.classList.remove('hidden');
    video.play();
    exitIcon.classList.remove('hidden');
});

exitIcon.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    video.classList.add('hidden');
    playIcon.style.display = 'block';
    exitIcon.classList.add('hidden');
});

// Custom code to add red color to the exit icon
exitIcon.style.color = 'red';
