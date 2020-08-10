import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    public player: MediaPlayer;


    constructor() {
        this.threshold = 0.25
        this.handlerinterception = this.handlerinterception.bind(this)
        this.handleVisivilityChange = this.handleVisivilityChange.bind(this)
    }

    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerinterception, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handleVisivilityChange)
    }

    private handleVisivilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause();
        }
    }

    private handlerinterception(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isVissible = entry.intersectionRatio >= this.threshold

        if (isVissible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause