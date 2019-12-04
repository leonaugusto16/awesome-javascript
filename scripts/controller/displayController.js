class displayController{
    constructor(){
        //this.displayCalcEl = document.querySelector("#display");
        this.displayCalcEl = document.querySelector('.current > h1');
        this.displayOperator = document.querySelector('.operator').innerHTML;
    }

    get displayCalc() {
        return this.displayCalcEl.innerHTML; 
    }
    set displayCalc(value) {
        this.displayCalcEl.innerHTML = value;
    }


}