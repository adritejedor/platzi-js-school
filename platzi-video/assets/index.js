import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] });
const playButton = document.getElementById('play-button');
playButton.onclick = () => player.togglePlay();
const muteButton = document.getElementById('mute-button');
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js')
     .catch(err => console.log(err.message))
}
