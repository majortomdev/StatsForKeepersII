import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const DropDownContainer = styled("div")`
  //width: 12.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.2rem;
  border: 2px solid grey;
  color: #3facfa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3fa9fa;
  font-size: 1.2rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const leagueList = {

    "Argentina Superliga": 682 ,
    "Aussie A-League": 73,
    "Belgium Jupiler":196,
    "Brazil Serie A": 693,
    "Canadian premier": 615,
    "China Super League": 95,
    "Czech Liga": 219,
    "Danish Superliga": 228,
    "English Premier": 237,
    "English Championship": 238,
    "French Ligue 1": 301,
    "French Ligue 2": 302,
    "German Bundesliga": 314,
    "German 2.Bundesliga": 315,
    "Greece Super League": 348,
    "Indian Super League": 106,
    "Ireland Premier": 380,
    "Ireland Division 1": 381,
    "Italy Serie A": 392,
    "Italy Serie B": 393,
    "Japan J1 League": 112,
    "Liga MeX Apertura": 631,
    "N'lands Eredivisie": 449,
    "N'lands Eerstedivisie": 450,
    "North Ireland Prem": 459,
    "Norway Eliteserien": 463,
    "Gaza Premier": 136,
    "West Bank League": 137,
    "Polish Ekstraklasa": 479,
    "Portugal Primeira": 490,
    "Portugal Segunda": 491,
    "Russia Premier": 504,
    "Scotland Premier": 518,
    "Spain La Liga": 358,
    "Spain La Liga2": 359,
    "Sweden Allsvenskan": 567,
    "Swiss Super League": 584,
    "Turkey Super Lig": 589,
    "USA MLS": 663

}

// const leagueArray = Object.keys(leagueList)
//         .map(function(key){
//             return leagueList[key];
//         });

    const leagueArray = Object.keys(leagueList)
    .map(function(key){
        return key;
    });

    

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  

const Leagues = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    // const [selectedOption, setSelectedOption] = useState(null);
    const [selectedLeague, setSelectedLeague] = useState(getKeyByValue(leagueList,237));

    const [selectedLeagueId, setSelectedLeagueId] = useState(leagueList["English Premier"]);

    const onLeagueClicked = value => () => {
        console.log(value)
        setSelectedLeague(value);
        setSelectedLeagueId(leagueList[value])
        setIsOpen(false);
        console.log(selectedLeague);
        console.log(selectedLeagueId);
      };
    return (
        <div className="dropDown">
          <h4>League</h4>
          <DropDownContainer>
          <DropDownHeader onClick={toggling}>{selectedLeague}</DropDownHeader>
          {/* <DropDownHeader onClick={toggling}>{selectedLeague? selectedLeague:setSelectedLeague(getKeyByValue(leagueList,237))}</DropDownHeader> */}
            {/* <DropDownHeader onClick={toggling}>{selectedLeague? selectedLeague: leagueList[237]}</DropDownHeader> */}
            {isOpen && (
            <DropDownListContainer>
              <DropDownList>

              {leagueArray.map(league => (
                <ListItem onClick={onLeagueClicked(league)} key={league}>
                  {league}
                </ListItem>
              ))}

              </DropDownList>
            </DropDownListContainer>
            )}
          </DropDownContainer>
          </div>
      );
}

export default Leagues;