class keyboardController{
    constructor(){
        this._keyController = new keyController();
    }
    initKeyboard(context){
        document.addEventListener('keyup', e=>{
            console.log(e)
            context._calcAudio.playAudio();
            this._keyController.keys(e.key,context);
        });
    }
}

