### Why video.js is important

Because IE and Safari [does not fully support HTML5](https://caniuse.com/?search=HTML5%20video). In addition every browser has a different implementation for the video element. Your player will not look the same in chrome and safari for example.  

With Video.js you just use an HTML5 video tag to embed a video. Video.js will then read the tag and make it work on all browsers and look exactly the same
### Implementation steps

Install video.js

`npm i video.js`

In your react file import the following

```
import videojs from "video.js";
import "video.js/dist/video-js.css";
```

Create a component with a `<video />` element, call videojs and pass this element as a parameter

`videojs(videoElement)`


You must have a reference to the player if you want to change the video. Changing the video because videjs will change the DOM and using just the prop on the `<video />` element will not work. useEffect is often used to change the video using a ref like this

```
  useEffect(() => {
    if (player) {
      player.src(video.sources);
    }
  }, [video, player])

```
you will have to call videojs(VIDEO_ELEMENT_SELECTOR) for everything to work.
### Notes
Currently used version: booking 7.11.4, shared: 7.14.3, creator studio: not used

modern browsers will autoplay the video only if it is muted


Latest: 7.17.0

### autoplay
https://videojs.com/blog/autoplay-best-practices-with-video-js/

### options
https://docs.videojs.com/tutorial-options.html

## hotkeys
f,m,k,space   plugin has support for arrows ^1-^9, up and down for volume, left and right for forward and back
https://www.youtube.com/watch?v=t1MycYx53ds&list=PPSV

### Skins and customizations

The skins available for video.js  aka. className on your `<video />` are listed below. To customize a control examine the skins listed [here](https://github.com/videojs/video.js/wiki/Skins) and take what you like. note: some are not free and you will not be able to see the code unless you google search the css file name.

vjs-big-play-centered
To make the big play button in the center

vjs-styles-defaults
This is the default skin and is applied by default

controlBar: { volumePanel: { inline: false, vertical: true }}
Set the video.js options above to make the volume panel vertical


### Video js plus
I found an interesting project called [video js plus](https://github.com/Pong420/videojs-plus) with a sandbox [here](https://codesandbox.io/s/71z2lm4ko6) but I don't recommend using it if you still need further customization.