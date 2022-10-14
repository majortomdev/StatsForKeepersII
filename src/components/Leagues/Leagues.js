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
    237: "English Premier",
    358: "Spanish La liga"
}

const leagueArray = Object.keys(leagueList)
        .map(function(key){
            return leagueList[key];
        });

const Leagues = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
      };
    return (
        <div className="dropDown">
          <h4>League</h4>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption? selectedOption: leagueList[237]}</DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
              <DropDownList>

              {leagueArray.map(league => (
                <ListItem onClick={onOptionClicked(league)} key={league}>
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