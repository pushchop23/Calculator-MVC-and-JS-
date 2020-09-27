import View from './View_class.js';
import Model from './Model_class.js';

export default class Controller{
    constructor (){
        this.model=new Model()
        this.view= new View();
    }
    numberListener(){
            this.view.numbers.addEventListener('click',(e)=>{    
            const key=e.target
            const action = key.dataset.key
            if(action !== undefined){
                this.model.setnumber(action)
                this.view.displayresult(this.model.result)
            }  
        });
    }

    operatorListener(){
        this.view.operator.addEventListener('click',(e)=>{
            const opt=e.target
            const action = opt.dataset.op
            if(action==='sub' || action==='div' || action==='mul' || action==='add'){
            this.model.setoperator(action) 
            this.view.displayresult(this.model.result)
            }
        })
    }

    clearListener(){
        this.view.clear_button.addEventListener('click',(e)=>{
            this.model.reset();
            this.view.clearresult();
            this.view.displayresult('0');
        })
    }

    backSpaceListener(){
        this.view.backspace.addEventListener('click',(e)=>{
            this.model.backspaceit();
            this.view.displayresult(this.model.result);
        })
    }

    equalListener(){
        this.view.equal_button.addEventListener('click',(e)=>{
            this.model.calculate();
            this.view.displayresult(this.model.result);
        })
    }

    dotListener(){
        this.view.dot.addEventListener('click',(e)=>{
            this.model.dotcalculate();
            this.view.displayresult(this.model.result)
        })
    }
}

