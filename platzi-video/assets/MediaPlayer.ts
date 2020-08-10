class MediaPlayer {
    public media: HTMLMediaElement;
    public plugins: any[];
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
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