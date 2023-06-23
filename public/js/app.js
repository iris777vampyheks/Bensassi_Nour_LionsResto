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

// color
exitIcon.style.color = 'red';
// tablist
function showTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}

// Display only 6images by default
document.getElementById("starters").style.display = "flex";
document.getElementById("breakfast").style.display = "none";
document.getElementById("lunch").style.display = "none";
document.getElementById("dinner").style.display = "none";

showTab('starters');
//////////////
$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: false
    });
});
////////////
$(document).ready(function() {
    $('#myCarousel').carousel();
  });
  