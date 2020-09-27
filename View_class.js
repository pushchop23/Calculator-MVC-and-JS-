export default class View {
    constructor(){
        this.numbers= document.querySelector('.keys');
        this.equal_button= document.getElementById('eq');
        this.operator=document.querySelector('.keys');
        this.clear_button=document.getElementById('CE');
        this.screen =document.getElementById('display');
        this.backspace=document.getElementById('backs');
        this.dot=document.getElementById('keyDot');
    }

    displayresult(param){
        this.screen.value=param 
    }
    
    clearresult(){
        this.screen.value=0;
    }
}
