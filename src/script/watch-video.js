class Video {
    static global() {
        Video.playIcon = document.querySelector('.play-icon');
        Video.closeIcon = document.querySelector('.close-icon');
        Video.iframe = document.querySelector('.watch-video-con iframe');
        Video.iframeCon = document.querySelector('.watch-video-con');
        Video.iframeVideoSrc = document.getElementById('iframe-video-src');
    }
    static playVideo() {
        Video.iframeCon.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // initiate video
        Video.iframe.src = Video.iframeVideoSrc.value;
    }
    static closeVideo() {
        Video.iframeCon.style.display = 'none';
        document.body.style.overflow = 'auto';
        // reset video
        Video.iframe.src = Video.iframeVideoSrc.value;
    }
    static init() {
        Video.global();
    }
}
Video.init();
// EVENTS
Video.playIcon.addEventListener('click', function () {
    Video.playVideo();
});
Video.closeIcon.addEventListener('click', function () {
    Video.closeVideo();
});