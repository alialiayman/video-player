### Why video.js is important

Because IE and Safari [does not support HTML5 in full](https://caniuse.com/?search=HTML5%20video) and the player implementation is not the same across all the browsers.

With Video.js you just use an HTML5 video tag to embed a video. Video.js will then read the tag and make it work on all browsers and even look the same

### Video js plus
I found an interesting project called [video js plus](https://github.com/Pong420/videojs-plus) with a sandbox [here](https://codesandbox.io/s/71z2lm4ko6)


### Implementation notes

You must have a reference to the player if you want to change the video. Changing the video using just the prop does not work. useEffect is often used to change the video like this

```
  useEffect(() => {
    if (player) {
      player.src(video.sources);
    }
  }, [video, player])

```
