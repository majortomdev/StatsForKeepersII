import './App.css';
import LeagueStandings from './components/LeagueStandings/LeagueStandings';
// import TopScorers from './TopScorers';

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Leagues from './components/Leagues/Leagues';
import Years from './components/Leagues/Years';

function App() {
// const App = ()  =>{
  return (
    
    <div className="App">
      <header className="App-header"><h1 className="font-Adler"> Footie Stats For Fans</h1> </header>
          {/* <TopScorers></TopScorers> */}
          <Leagues></Leagues>
          <Years></Years>

          <div className='columnLS'>
            {/* <LeagueBanner></LeagueBanner> */}
            <LeagueStandings></LeagueStandings>
          </div>
          
      
    </div>
  );

}

export default App;
