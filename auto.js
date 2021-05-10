let audioPlay = document.getElementById('myaudio')

audioPlay.play()

setTimeout(() => {
  audioPlay.pause()
  audioPlay.load()
}, 10)
