const deathAudio = new Audio('/audio/mario-death-sound.mp3')

addEventListener('click', () => {
  deathAudio.volume = .15
  deathAudio.play()
})