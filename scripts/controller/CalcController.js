
class CalcController {
    constructor() {
        this._calcTime = new timeController();
        this._calcAudio = new audioController();
        this._calcCopyPaste = new copyPasteController();
        this._calcKeyboard = new keyboardController();
        this._calcButtonEvents = new buttonEventsController();
        this._calcDisplay = new displayController();

        this._lastOperator = '';
        this._lastNumber = '';

        this._operation = [];
        this.initialize();
        this._calcButtonEvents.initButtonEvents(this);
        this._calcKeyboard.initKeyboard(this);
    }

    initialize(){
        this._calcTime.setDisplayDateTime();
        setInterval(()=>{
            this._calcTime.setDisplayDateTime();
        }, 1000);

        this.setLastNumberToDisplay();
        this._calcCopyPaste.pasteFromClipboard(this);

        document.querySelectorAll('.btn-ac').forEach(btn=>{
            btn.addEventListener('dblclick', e =>{
                this._calcAudio.toggleAudio();
            });
        });
    }

    isOperator(value){
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
     }
     
    getLastItem(isOperator = true){
        let lastItem;

        for(let i = this._operation.length-1; i>=0; i--){
            if(this.isOperator(this._operation[i]) == isOperator){
                lastItem = this._operation[i];
                break;
            }
        }

        if(!lastItem){
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;
        }
        return lastItem
    }

    setLastNumberToDisplay(){
        let lastNumber = this.getLastItem(false);

        if(!lastNumber){
            lastNumber = 0;
        }

        this._calcDisplay.displayCalc = lastNumber;
    }

    clearAll(){
        this._operation = [];
        this._lastNumber = '';
        this._lastOperator = '';
        this.setLastNumberToDisplay();
    }

    clearEntry(){
        this._operation.pop();
        this.setLastNumberToDisplay();
    }

    getResult(){
        try{
            return eval(this._operation.join(""));
        }
        catch(e){
            setTimeout(()=>{
                this._calcDisplay.setError();
            },1);
        }

    }

    calc(operator){
        let last = '';
        this._lastOperator = this.getLastItem();

        if(operator === "equals" || operator === "Enter" || operator === "="){
            this._calcDisplay.displayOperator = '='
        }

        if(this._operation.length < 3){
            let firstItem = this._operation[0];
            this._operation = [firstItem, this._lastOperator, this._lastNumber];
        }

        if(this._operation.length > 3){
            last = this._operation.pop();

            this._lastNumber = this.getResult();
        } else if(this._operation.length == 3){
            this._lastNumber = this.getLastItem(false);
        }

        let result = this.getResult();
        
        if(last == '%'){
            result /= 100;
            this._operation = [result];
        }
        else {
            this._operation = [result];

            if(last){
                this._operation.push(last);
            }

        }
        this.setLastNumberToDisplay();
    }

    pushOperation(value){
        this._operation.push(value);
        
        if(this._operation.length > 3){
            this._calcDisplay.displayOperator = value;
            this.calc(value);
        }
    }
    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;
    }

    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){
                this.setLastOperation(value);
            }
            else {
                this.pushOperation(value)
                this.setLastNumberToDisplay();

            }
        } 
        else {
            if(this.isOperator(value)) {
                console.log('jorge', value)
                this._calcDisplay.displayOperator = value;
                this.pushOperation(value)
            }
            else{
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(newValue);
                this.setLastNumberToDisplay();
            }
        }
    }

    addDot(){
        let lastOperation = this.getLastOperation();

        if(typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;

        if(this.isOperator(lastOperation) || !lastOperation){
            this.pushOperation('0.');
        }
        else {
            this.setLastOperation(lastOperation.toString() + '.');
        }

        this.setLastNumberToDisplay();
    }

}