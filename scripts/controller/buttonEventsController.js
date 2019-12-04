class buttonEventsController{

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
        console.log(context._operation);
        switch(value) {
            case 'clear':
                context.clearAll();
                break;
            case 'ce':
                context.clearEntry();
                break;
            case '+':
                context.addOperation('+');
                break;
            case '-':
                context.addOperation('-');
                break;
            case '/':
                context.addOperation('/');
                break;
            case '*':
                context.addOperation('*');
                break;            
            case '%':
                context.addOperation('%');
                break;            
            case 'equals':
                context.calc();
                break;   
            case 'comma':
                context.addDot();
                break;         
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                context.addOperation(parseInt(value));
                break;
            default:
                context.setError();
                break;            
        }
    }
}