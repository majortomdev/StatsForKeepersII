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

const yearsList = [
    "18/19",
    "19/20",
    "20/21",
    "21/22"
]

const Years = props => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const [selectedYear, setSelectedYear] = useState("19/20");

    const onYearClicked = value => () => {
        setSelectedYear(value);
        props.setYear(value);
        setIsOpen(false);
        console.log(selectedYear);
      };
    return (
        <div className="dropDown" >
          <h4>Seasons</h4>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedYear}</DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
              <DropDownList>

              {yearsList.map(year => (
                <ListItem onClick={onYearClicked(year)} key={year}>
                  {year}
                </ListItem>
              ))}

              </DropDownList>
            </DropDownListContainer>
            )}
          </DropDownContainer>
          </div>
      );
}

export default Years;