class MediaPlayer {
    
    public media: HTMLMediaElement;
    public plugins: any[];
    public container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayers();
        this.initPlugins();
    }
    private initPlayers(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
    
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        if (this.media.muted === false) {
            this.mute();
        }
        else {
            this.unmute();
        }
    }
}

export default MediaPlayer;