import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "../db/article.json";

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            min:this.props.min,
            max:this.props.max,
            input1:"",
            input2:"",
            input3:0,
            correct:false,
            wrong:false,
            data:[],
            totalno:0,
            used:0,
            selectarticle:{},
            switch:false,
            index:0
            
        };
        this.state.data = data.filter(item => 
             (+item.no.split(" ")[0]) >= this.state.min && (+item.no.split(" ")[0])<= this.state.max && item.show )
        this.state.totalno = this.state.data.length 
     }

    componentDidMount(){
       this.onNext()
    }

    onInput1Change(value){ 
          this.setState({input1:value})
    }
    
    onInput2Change(value){ 
          this.setState({input2:value.toUpperCase()})
    }

    onInput3Change(value){ 
          this.setState({input3:value})
    }
    

    changeSwitch(){
        this.setState({switch:!this.state.switch})
    }

    onSubmit = () => {
        let check = 1
        if(this.state.wrong)
          check = this.props.check //0
        this.setState({wrong:false})
        let temp =false
        let str = `${this.state.input1}${this.state.input2}`
        let str1 = `${this.state.input1} ${this.state.input2}`
        let str2 = `${this.state.input1} -${this.state.input2}` 
        
        const {no , chapter} = this.state.selectarticle
        temp = (no === str || no === str1 || no === str2) && (chapter === this.state.input3.toString());

        if(temp){
            this.setState({correct:true, used:this.state.used+check})
            if(check === 1){
                let items = [...this.state.data]
                let item = {...items[this.state.index], times:1}
                items[this.state.index] = item
                this.setState({data: items})
            }
        }else{
            this.setState({wrong:true})
        }
    }



   onNext = () => {
       if(this.state.totalno === this.state.used)
        return this.props.changeState();
       
       let ind = Math.floor(Math.random() * this.state.totalno)
       let temp = this.state.data[ind]
       if(temp.times !== 0)
          this.onNext()
       else{
          this.setState({
            selectarticle:temp,
            index: ind,
            input1:"",
            input2:"",
            input3:0,
            correct:false,
            wrong:false,
           })
       }   
   }


    render() {
        return (
          <div className="flex flex-column mt-5 pt-5">
             <h1 className="mb-4">Articles</h1>
             <h5 className="mb-5" onClick={()=> this.changeSwitch()} hidden={this.state.switch}>rest No of Articles </h5>
             <h5 className="mb-5" onClick={()=> this.changeSwitch()} hidden={!this.state.switch}>{`${this.state.used}/${this.state.totalno}`}</h5>  
                <h3 className="mb-5">{this.state.selectarticle.article}</h3>
                <div hidden={this.state.selectarticle.chapter === "0"}>
                    Chapter:
                    <input 
                           type='Number' value={this.state.input3}
                           min='0' className="mb-3 ml-1"
                           style={{width: 50}}
                           onChange={e => this.onInput3Change(e.target.value)}
                        />
                </div>
                <div>
                    Article: <input 
                           type='Number' value={this.state.input1}
                           min='0' max='395'
                           style={{width: 50}}
                           onChange={e => this.onInput1Change(e.target.value)}
                        />
                    - <input 
                           type='Text' 
                           value={this.state.input2}
                           style={{width: 50}} 
                           onChange={e => this.onInput2Change(e.target.value)}
                        />
                </div>          
            { !this.state.correct 
                ? <button onClick={e => this.onSubmit()} className="btn btn-primary mt-4">Submit</button>
                : <button onClick={e => this.onNext()} className="btn btn-primary mt-4">Next</button> 
            }
            <p className="mt-2" hidden={!this.state.wrong} style={{color : 'red'}}>
               {`Correct Ans is Article No. ${this.state.selectarticle.no}`}
            </p> 
            <p className="mt-2" hidden={!this.state.wrong || this.state.selectarticle.chapter === "0"} style={{color : 'red'}}>
               {`Of chapter ${this.state.selectarticle.chapter}`}
            </p>   
            <p className="mt-2" hidden={!this.state.correct} style={{color : 'green'}}>Correct Value</p>    
        
          </div>
        );
    }
}

export default DashBoard;