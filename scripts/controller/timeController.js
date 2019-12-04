class timeController {
    
    constructor(){
        this._locale = 'pt-BR';
        this._currentDate; 
        this._dateEl = document.querySelector(".material-icons");
        this._timeEl = document.querySelector(".minify");

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        return this._currentDate = value;
    }

  }