class copyPasteController{

    pasteFromClipboard(context){
        document.addEventListener('paste',e=>{
            let text = event.clipboardData.getData('text')
            context._calcDisplay.displayCalc = parseFloat(text)
            context.pushOperation(parseFloat(text))
        });
    }
    // pasteFromClipboard(context){
    //     document.onpaste = ()=>{
    //         console.log("jorge")
    //         let text = event.clipboardData.getData('text')
    //         context._calcDisplay.displayCalc = parseFloat(text)
    //         context.pushOperation(parseFloat(text))
    //     };
    // }

    copyToClipboard(context){
        let input = document.createElement('input');
        input.value = context._calcDisplay.displayCalc;
        document.body.appendChild(input);
        input.select();
        document.execCommand("Copy");
        input.remove();
    }
}