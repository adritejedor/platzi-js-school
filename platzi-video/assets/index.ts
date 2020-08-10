import 'regenerator-runtime/runtime'
import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] });
const playButton: HTMLElement = document.getElementById('play-button');
playButton.onclick = () => player.togglePlay();
const muteButton: HTMLElement = document.getElementById('mute-button');
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js')
     .catch(err => console.log(err.message))
}
