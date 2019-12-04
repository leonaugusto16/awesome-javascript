class audioController{

    constructor(){
        this._audio = new Audio('click.mp3')
        this._audioOnOff = true;
    }

    toggleAudio(){
        this._audioOnOff = !this._audioOnOff;
    }

    playAudio(){
        if(this._audioOnOff){
            this._audio.currentTime = 0;
            this._audio.play();
        }
    }
}