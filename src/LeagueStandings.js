import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/LeagueStandings.css'

const LeagueStandings = () => {
    const [data, getData] = useState([]);

    useEffect(() => {
        getStandings();
    }, [])

    const getStandings = () => {
        axios.get("/soccer/standings/1980")
        .then((TeamStats) => {
            //console.log(TeamStats);
            //data = res.get("data");
            const statsArray = TeamStats.data;
            console.log(statsArray)

                getData(statsArray); 
        })
    }

    if (!data) return (<div>No Records Found</div>)

    return (
        <>
            {/* <button>Get League Standings</button> */}

            {/* <h1>Final Positions for Season xxx</h1> */}


            <table className="table">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Draws</th>
                    <th>GoalDiff</th>
                    <th className="bold">Points</th>
                </tr>
                {data.map((standing, i) => (
                    <tr key={i}>
                        <td>{standing.position}</td>
                        <td>{standing.name}</td>
                        <td>{standing.wins}</td>
                        <td>{standing.losses}</td>
                        <td>{standing.draws}</td>
                        <td>{standing.goalDiff}</td>
                        <td>{standing.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
        );
}

export default LeagueStandings;


