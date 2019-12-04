class displayController{
    constructor(){
        this.displayCalcEl = document.querySelector('.current > h1');
        this.displayOperatorEl = document.querySelector('.operator');
        this.limitDisplay = 11;
    }

    get displayCalc() {
        return this.displayCalcEl.innerHTML; 
    }
    set displayCalc(value) {
        if(value.toString().length > this.limitDisplay){
            this.setError();
        } else{
            this.displayCalcEl.innerHTML = value;
        }
    }

    get displayOperator() {
        return this.displayOperatorEl.innerHTML;
    }
    set displayOperator(value) {
        this.displayOperatorEl.innerHTML = value;
    }

    setError(){
        this.displayCalcEl.innerHTML = "Error";
    }


}