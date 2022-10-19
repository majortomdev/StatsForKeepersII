import React, { useEffect, useState } from "react";
import axios from "axios";
import './LeagueStandings.css';
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css"

const LeagueStandings = (props) => {
    const [data, getData] = useState([]);
    const leagueId = props.leagueId;
    const year = props.year;

    useEffect(() => {
        console.log("LeagueStnadings <useEffect>   "+leagueId+",  "+year);
        getSeasonId();
        getStandings();
    }, [leagueId, year])

    const [season, setSeason] = useState(1980);
    const getSeasonId = () => {
        axios.get("/soccer/getSeasonId?leagueId="+leagueId+"&year="+year)
        .then((response) => {
            const newSeason = response.data;
            setSeason(newSeason);
        })
    }

    const getStandings = () => {
        axios.get("/soccer/standings/"+season)
        .then((TeamStats) => {
            const statsArray = TeamStats.data;

                getData(statsArray); 
        })
    }

    if (!data) return (<div>No Records Found</div>)

    return (
        <>
            {/* <button>Get League Standings</button> */}

            <h5>Final Positions for Season xxx</h5>


            {/* <table className="table"> */}

            <Table responsive>
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
            {/* </table> */}
            </Table>
        </>
        );
}

export default LeagueStandings;


