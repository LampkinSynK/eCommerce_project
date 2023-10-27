const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const videos = [video1, video2, video3, video4];
let videoIndex = 0;

video1.onended = function () {
    videoIndex=0;
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
}

video2.onended = function () {
    videoIndex=1;
    video3.play();
    video2.style.opacity=0;
    video3.style.opacity=1;
}

video3.onended = function () {
    videoIndex=2;
    video4.play();
    video3.style.opacity=0;
    video4.style.opacity=1;
}

video4.onended = function () {
    videoIndex=3;
    video1.play();
    video4.style.opacity=0;
    video1.style.opacity=1;
}

changeVideo = () => {
    switch (videoIndex) {
        case 0:
            video1.currentTime = 0;
            video1.pause();
            videoIndex++;
            video2.play();
            video1.style.opacity=0;
            video2.style.opacity=1;
            break;
        case 1:
            video2.currentTime = 0;
            video2.pause();
            video3.play();
            video2.style.opacity=0;
            video3.style.opacity=1;
            videoIndex++;
            break;
        case 2:
            video3.currentTime = 0;
            video3.pause();
            video4.play();
            videoIndex++;
            video3.style.opacity=0;
            video4.style.opacity=1;
            break;
        case 3:
            video4.currentTime = 0;
            video4.pause();
            video1.play();
            videoIndex=0;
            video4.style.opacity=0;
            video1.style.opacity=1;
            break;
    }
}

changeVideoBack = () => {
    switch (videoIndex) {
        case 0:
            video1.currentTime = 0;
            video1.pause();
            videoIndex=3;
            video4.play();
            video1.style.opacity=0;
            video4.style.opacity=1;
            break;
        case 1:
            video2.currentTime = 0;
            video2.pause();
            video1.play();
            video2.style.opacity=0;
            video1.style.opacity=1;
            videoIndex--;
            break;
        case 2:
            video3.currentTime = 0;
            video3.pause();
            video2.play();
            videoIndex--;
            video3.style.opacity=0;
            video2.style.opacity=1;
            break;
        case 3:
            video4.currentTime = 0;
            video4.pause();
            video3.play();
            videoIndex--;
            video4.style.opacity=0;
            video3.style.opacity=1;
            break;
    }
}

pauseOrPlay = () => {
    if (videos[videoIndex].currentTime === 0) {
        videos[videoIndex].play();
    }
    else {
        videos[videoIndex].pause();
    }
}