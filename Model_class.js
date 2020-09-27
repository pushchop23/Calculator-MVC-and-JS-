const operations= {
    'mul':'*',
    'add':'+',
    'div':'/',
    'sub':'-',
    'eq':'='
}

export default class Model{
    constructor(){
        this.no1= '';
        this.no2='';
        this.operator='';
        this.result='';
        this.isoperator=false;
    }   
    setnumber(pnumber){
        if(this.operator===''){
            this.no1=this.result+pnumber;
        }
        else{
            this.no2=this.result+pnumber;
        }
        this.result=this.result+pnumber;
    }
    setoperator(temp){
        if(this.isoperator){
            if(this.result.toString().slice(-1)==='+' || this.result.toString().slice(-1)==='/' || this.result.toString().slice(-1)==='*' || this.result.toString().slice(-1)==='-' || this.result.toString().slice(-1)==='.'){

            }
            else{
                this.result=eval(this.result)
                this.no1=this.result
                this.isoperator=false
            }
        }
        if(this.no1==='' && this.no2===''){
            this.no1=0;
            this.operator=temp;
            this.result="0"+operations[temp]
            this.isoperator=true
        }
        else if(!this.isoperator){
            this.operator=temp;
            this.result=this.no1+operations[temp]
            this.isoperator=true
            
        }

    }

    reset(){
        this.no1= '';
        this.no2='';
        this.operator='';
        this.result='';
        this.isoperator=false;
    }

    dotcalculate(){
        if(!this.result.toString().includes('.') || this.isoperator===true){
            this.result=this.result+"." ;
        }
    }
    
    calculate(){
        if(this.result.slice(-1)==='+' || this.result.slice(-1)==='-' || this.result.slice(-1)==='*' || this.result.slice(-1)==='/' || this.result.slice(-1)==='.' ){
            this.result=eval(this.result.slice(0,-1))
            this.isoperator=false
            this.no1=this.result
        }
        else{
            this.result=eval(this.result)
            this.isoperator=false
            this.no1=this.result
        }
    }
    
    backspaceit(){
        this.result=this.result.toString().slice(0,-1)
    }
}