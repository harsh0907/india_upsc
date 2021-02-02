import React, { Component } from 'react';
import SelectRange  from "./SelectRange";
import DashBoard  from "./DashBoard";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            change: 1,
            min:1,
            max:1,
            check:1
        };
    }
    
    SelectRange = (mi, ma, che) => {
        this.setState({min: mi, max:ma, change:2, check:che})
    }

    changeState = () => {
        this.setState({change:1})
    }
    
    render() {
        return (
        <div>
           { this.state.change === 1 ? <SelectRange min={this.state.min} max={this.state.max} submit={this.SelectRange} />
           : <DashBoard min={this.state.min} max={this.state.max} changeState={this.changeState} check={this.state.check}/>}
        </div>
        );
    }
}

export default Home;