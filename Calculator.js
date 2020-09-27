import Controller from './Controller_class.js';

export default class Calci{
    constructor(){
        console.log('test22')
        this.controller= new Controller()
        console.log('test11')
    }
    
    init(){   
     this.controller.numberListener();
     this.controller.operatorListener();
     this.controller.clearListener();
     this.controller.equalListener();
     this.controller.backSpaceListener();
     this.controller.dotListener();
    }
 
}