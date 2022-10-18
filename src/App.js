import './App.css';
import LeagueStandings from './components/LeagueStandings/LeagueStandings';
// import TopScorers from './TopScorers';

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Leagues from './components/Leagues/Leagues';
import Years from './components/Leagues/Years';
import Scorers from './components/Scorers/Scorers';
import { useState } from 'react';

function App() {
// const App = ()  =>{

  const [leagueId, setLeagueId] = useState(237);
  const [year, setYear]= useState("20/21");


  return (

    <div className="App">
      <header className="App-header"><h1 className="font-Adler"> Footie Stats For Fans</h1> </header>
          {/* <TopScorers></TopScorers> */}
          <Leagues leagueId={leagueId} setLeagueId={setLeagueId}></Leagues>
          {console.log("QQQQQQQQQQQQQQQQQQQQ   "+leagueId)}
          <Years year={setYear}></Years>
          <Button>Display Standings</Button>
          <Scorers></Scorers>
          <div className='columnLS'>
            {/* <LeagueBanner></LeagueBanner> */}
            <LeagueStandings leagueId={leagueId} year={year}></LeagueStandings>
          </div>
          
      
    </div>
  );

}

export default App;
