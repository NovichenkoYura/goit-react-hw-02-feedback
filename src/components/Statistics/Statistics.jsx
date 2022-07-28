import React, { Component } from "react";
import styled from "styled-components";


class Statistics extends Component{
    render() {
        return <div className="Statistics">
            <h1 className="Statistics__title">Statistics</h1>
            <div className="Statistics__list">
                <StatRange>Good</StatRange>
                <StatRange>Neutral</StatRange>
                <StatRange>Bad</StatRange>
                
            </div>
            </div>
        
}
}

export default Statistics

const StatRange = styled.span`
display: flex;
  justify-content: ;
`

