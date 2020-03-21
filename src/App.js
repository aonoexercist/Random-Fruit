import React, {Component} from 'react';
import food from './food';
import {choice, remove} from './helpers';

class App extends Component{
    state = {
        order: ''
    }

    onClick = (e) => {
        this.setState({ order: choice(food) });
    }

    render(){
        let order = this.state.order;
        let leftItems = remove(food, order);
        return(
            <div style={{"text-align": "center"}}>
                <h1>Random Fruits</h1>
                <p>Please order randomly. WE have 
                {
                    leftItems.map( (val, i) => {
                        return (
                            `${val.pic}-->${val.qty}`
                        )
                    })
                } 
                </p>
                <button onClick={this.onClick}>Pick random</button>
                <p>I'd like one {order.pic}, please.</p>
                <p>Here you go: {order.pic}</p>
            </div>
        );
    }
}

export default App;