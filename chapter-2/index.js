!(function () {
    navigator.getUserMedia = (
        navigator.getUserMedia
                || navigator.webkitGetUserMedia
                || navigator.mozGetUserMedia
                || navigator.msGetUserMedia
    );

    // according to caniuse.com
    window.URL = (window.URL || window.webkitURL);

    if (!navigator.getUserMedia || !URL) {
        return;
    }

    var option = {
        video: {
            mandatory: {
                minAspectRatio: 1.777,
                maxAspectRatio: 1.778
            },
            optional: [
                {maxWidth: 640},
                {maxHeight: 480}
            ]
        },
        audio: false
    };

    navigator.getUserMedia(option, function (stream) {
        console.log(stream);
        var video = document.querySelector('video');
        video.src = URL.createObjectURL(stream);
    }, function (err) {
        console.log(err);
    });

    // 获取设备列表
    // MediaStreamTrack.getSources is deprecated.
    // See https://www.chromestatus.com/feature/4765305641369600 for more details.
    // MediaStreamTrack.getSources((x) => console.log(x));

    // New in Google Chrome 48.0.2564.23 Beta
    // The MediaStreamTrack.getSources() method has been deprecated in favor of MediaDevices.enumerateDevices().
    // see: http://linux.softpedia.com/progChangelog/Google-Chrome-Changelog-48046.html#ixzz4ECjNOxxU
    // see: http://chromium-bugs.chromium.narkive.com/rOMSMBZ4/issue-550981-in-chromium-deprecate-mediastreamtrack-getsources
    // NOTE:
    // navigator.mediaDevices instanceof MediaDevices === true
    // 
    navigator.mediaDevices.enumerateDevices().then(function(e) {
        console.log(e)
    });
})(); 