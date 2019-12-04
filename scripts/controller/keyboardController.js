class keyboardController{
    initKeyboard(context){
        document.addEventListener('keyup', e=>{
            context._calcAudio.playAudio();
            switch(e.key) {
                case 'Escape':
                    context.clearAll();
                    break;
                case 'Backspace':
                    context.clearEntry();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                    context.addOperation(e.key);
                    break;            
                case 'Enter':
                case '=':
                    context.calc();
                    break;   
                case '.':
                case ',':
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
                    context.addOperation(parseInt(e.key));
                    break;      
                case 'c':
                    if(e.ctrlKey) context._calcCopyPaste.copyToClipboard(context);
                    break;                               
            }
            
        });
    }
}

