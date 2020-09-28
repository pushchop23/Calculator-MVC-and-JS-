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
        this.isdot=true;
    }   
    setnumber(pnumber){
        if(this.operator===''){
            this.no1=this.result+pnumber;
        }
        else{
            this.no2=this.result.toString()+pnumber;
            
        }
        // console.log(this.result)
        this.result=this.result+pnumber;
    }

    setoperator(temp){
        if(this.isoperator){
            if(this.result.toString().slice(-1)==='+' || this.result.toString().slice(-1)==='/' || this.result.toString().slice(-1)==='*' || this.result.toString().slice(-1)==='-' || this.result.toString().slice(-1)==='.'){

            }
            else{
                // this.result=eval(this.result)
                // this.no1=this.result
                // this.isoperator=false
                console.log('test34')
                this.result=this.result+operations[temp]
                this.no1=this.no2
                this.no2=''
                this.isdot=true
                console.log('test35')
            }
        }
        if(this.no1==='' && this.no2===''){
            this.no1=0;
            this.operator=temp;
            this.result="0"+operations[temp]
            this.isoperator=true
            this.isdot=true
            console.log('up')
        }
        else if(!this.isoperator){
            this.operator=temp;
            this.result=this.result+operations[temp]
            this.isoperator=true
            this.isdot=true
            console.log('here')
            
        }

    }

    reset(){
        this.no1= '';
        this.no2='';
        this.operator='';
        this.result='';
        this.isoperator=false;
        this.isdot=true
    }

    dotcalculate(){
        if( this.isdot===true){
            this.result=this.result+"." ;
            this.isdot=false
        }
    }
    
    calculate(){
        // if(this.result.slice(-1)==='+' || this.result.slice(-1)==='-' || this.result.slice(-1)==='*' || this.result.slice(-1)==='/' || this.result.slice(-1)==='.' ){
        //     this.result=eval(this.result.slice(0,-1))
        //     this.isoperator=false
        //     this.no1=this.result
        // }
        // else{
        //     this.result=eval(this.result)
        //     this.isoperator=false
        //     this.no1=this.result
        // }
        while(this.result.slice(-1)==='+' || this.result.slice(-1)==='-' || this.result.slice(-1)==='*' || this.result.slice(-1)==='/' || this.result.slice(-1)==='.'){
            this.result=this.result.slice(0,-1)
        }
            this.result=eval(this.result)
            this.result=this.result.toString()
            this.isoperator=false
            this.no1=this.result
            
        
    }
    
    backspaceit(){
        this.result=this.result.toString().slice(0,-1)
    }
}