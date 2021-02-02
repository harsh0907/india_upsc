import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SelectRange extends Component {
    constructor(props){
        super(props);
        this.state = {
            min:this.props.min,
            max:this.props.max,
            disable:false,
            check:false
        };
    }
    
    onMinChange(value){
        this.setState({min:value, disable:false})
    }

    onCheckChange(value){
        this.setState({check:value, disable:false})
    }
    

    onMaxChange(value){
        this.setState({max:value, disable:false}) 
    }

    onSubmit(){
        if((this.state.max > 395 || this.state.min < 1) && this.state.max<this.state.min)
          this.setState({disable:true})
        else 
          this.props.submit(this.state.min, this.state.max, this.state.check?0:1) 
    }

    render() {
        return (
          <div className="flex flex-column mt-5 pt-5">
            <div>
                <h3 className="mb-4">SelectRange</h3>  
                <div>
                    Min: <input 
                           type='Number' value={this.state.min}
                           className="mr-3" min='0' max='395'
                           style={{width: 70}}
                           onChange={e => this.onMinChange(e.target.value)}
                        />
                    Max: <input 
                           className="mr-2"
                           type='Number' 
                           value={this.state.max} min='0' max='395'
                           style={{width: 70}} 
                           onChange={e => this.onMaxChange(e.target.value)}
                        />
                    Repeat:
                    <input
                        className="ml-2"
                        type="checkbox"
                        value={this.state.value}
                        onChange={e => this.onCheckChange(e.target.checked)}
                     />
                </div>          
            <button disabled={this.state.disable} onClick={e => this.onSubmit()} className="btn btn-primary mt-4">SelectRange</button>
            <p className="mt-2" hidden={!this.state.disable} style={{color : 'red'}}>Enter Correct Value</p>    
            </div>
          </div>
        );
    }
}

export default SelectRange;