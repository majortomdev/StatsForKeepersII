import React, { Component } from "react";
import axios from "axios";

export default class TopScorers extends Component {
    constructor() {
        super();
        this.state = {
            topscorers: "Not loaded yet"
        };
    }

    componentDidMount = () => {
        axios.get("/soccer/topscorers?seasonId=1980").then(response => {
            console.log(response.data);
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