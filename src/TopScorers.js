import React, { Component } from "react";
import axios from "axios";

export default class TopScorers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topscorers: "Not loaded yet"
        };
    }

    componentDidMount = () => {
        axios.get("/soccer/topscorers?seasonId=1980").then(topscorers=> {
            this.setState({topscorers})  
        });
    };

    render() {
        return (
        <div>
            <button>Get List of Highest Scorers</button>
            <h1>Top Scorers for Season xxx</h1>
            <div>{this.state.topscorers}</div>
        </div>
        );
    }
}