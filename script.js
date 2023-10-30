const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const videos = [video1, video2, video3, video4];
let videoIndex = 0;
let pausedAt = 0;


video1.onended = function () {
    videoIndex=1;
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
}

video2.onended = function () {
    videoIndex=2;
    video3.play();
    video2.style.opacity=0;
    video3.style.opacity=1;
}

video3.onended = function () {
    videoIndex=3;
    video4.play();
    video3.style.opacity=0;
    video4.style.opacity=1;
}

video4.onended = function () {
    videoIndex=0;
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
    if (videos[videoIndex].currentTime === pausedAt) {
        videos[videoIndex].play();
        pausedAt = null;
    }
    else {
        videos[videoIndex].pause();
        pausedAt = videos[videoIndex].currentTime;
    }
}



newJDM = () => {
    document.getElementById('firstCar').src = "images/nsx.jpg";
    document.getElementById('secondCar').src = "images/supra.jpg";
    document.getElementById('thirdCar').src = "images/miata.jpg";

}

imported = () => {
    document.getElementById('firstCar').src = "images/wrx.jpg"; //Type R STI 2001
    document.getElementById('secondCar').src = "images/silvia.jpg"; //1998 s15 Silvia
    document.getElementById('thirdCar').src = "images/datsun.jpg"; //Datsun 280z 1971
}

oldJDM = () => {
    document.getElementById('firstCar').src = "images/rx7.avif"; //1993
    document.getElementById('secondCar').src = "images/skyline.jpg"; //1999
    document.getElementById('thirdCar').src = "images/eclipse.jpg"; //1998
}

earlyJDM = () => {
    document.getElementById('firstCar').src = "images/lancer.png"; // 2008
    document.getElementById('secondCar').src = "images/s2000.jpg"; //2009
    document.getElementById('thirdCar').src = "images/GTR.jpg"; //2017
}
