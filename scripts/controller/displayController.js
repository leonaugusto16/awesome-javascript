class displayController{
    constructor(){
        //this.displayCalcEl = document.querySelector("#display");
        this.displayCalcEl = document.querySelector('.current > h1');
        this.displayOperatorEl = document.querySelector('.operator');
    }

    get displayCalc() {
        return this.displayCalcEl.innerHTML; 
    }
    set displayCalc(value) {
        this.displayCalcEl.innerHTML = value;
    }

    get displayOperator() {
        return this.displayOperatorEl.innerHTML;
    }
    set displayOperator(value) {
        this.displayOperatorEl.innerHTML = value;
    }


}