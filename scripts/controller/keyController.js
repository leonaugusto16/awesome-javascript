class keyController{
    keys(value,context){
        switch(value) {
            case 'Escape':
            case 'clear':
                context.clearAll();
                break;
            case 'Backspace':
            case 'ce':
                context.clearEntry();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                context.addOperation(value);
                break;            
            case 'Enter':
            case '=':
            case 'equals':
                context.calc(value);
                break;   
            case '.':
            case ',':
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
            case 'c':
                if(event.ctrlKey) context._calcCopyPaste.copyToClipboard(context);
                break;    
            case 'pi':
                context.addOperation(3.14159);
                break;                   
        }
    }
    

}