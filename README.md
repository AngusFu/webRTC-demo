# webRTC-demo

《用 WebRTC 开发交互实时通信应用》读书笔记

## chapter 2

- 获取媒体设备，接收三个参数

```javascript

    navigator.getUserMedia(option, success, error);

```

- `window.URL` 对象的兼容，特意查了下 [caniuse](http://caniuse.com/#feat=bloburls)，像下面这样就好

```javascript

    window.URL = (window.URL || window.webkitURL);

```

- 利用它 `createObjectURL`将媒体 stream 放在 `<video>` 中播放

```javascript
    
    navigator.getUserMedia({ video: true, audio: true},  (stream) => {
        // ...
        
        video.src = URL.createObjectURL(stream);

    }, (err) => console.log(err));

```

- 获取设备列表：书上介绍的方法已经过时

```javascript
    
    // deprecated
    // MediaStreamTrack.getSources is deprecated.
    // See https://www.chromestatus.com/feature/4765305641369600 for more details.
    MediaStreamTrack.getSources(function (sources) {
        console.log(sources);
    });


    // New in Google Chrome 48.0.2564.23 Beta
    // The MediaStreamTrack.getSources() method has been deprecated in favor of MediaDevices.enumerateDevices().
    // see: http://linux.softpedia.com/progChangelog/Google-Chrome-Changelog-48046.html#ixzz4ECjNOxxU
    // see: http://chromium-bugs.chromium.narkive.com/rOMSMBZ4/issue-550981-in-chromium-deprecate-mediastreamtrack-getsources
    // NOTE:
    //     `navigator.mediaDevices instanceof MediaDevices === true`
    // 
    navigator.mediaDevices.enumerateDevices().then(function(sources) {
        console.log(sources);
    });

```