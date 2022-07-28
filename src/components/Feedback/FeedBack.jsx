import React, { Component } from "react";


class Feedback extends Component{
    addGoodItem = () => {
        console.log('good')        
    }
    addNeutralItem = () => {
        console.log('neutral')        
    }

    addBadItem = () => {
        console.log('bad')        
    }




    render() {
        return <div className="Feedback">
            <h1 className="Feedback__title">Please leave feedback</h1>
            <div className="Feedback__btn">
                <button type="button" onClick={this.addGoodItem}>Good</button>
                <button type="button" onClick={this.addNeutralItem}>Neutral</button>
                <button type="button" onClick={this.addBadItem}>Bad</button>
            </div>
            </div>
        
}
}

export default Feedback