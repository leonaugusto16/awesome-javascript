class buttonEventsController{

    constructor(){
        this._keyController = new keyController();
    }
    
    initButtonEvents(context){
        let buttons = document.querySelectorAll('.buttons > div');
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.getAttribute('data-key')
                console.log(textBtn)
                this.execBtn(context,textBtn);
            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer";
            });
        })
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    execBtn(context,value){
        context._calcAudio.playAudio();
        this._keyController.keys(value,context);
    }
}