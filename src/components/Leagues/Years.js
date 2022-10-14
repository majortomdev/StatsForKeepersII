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
    "2018/19",
    "2019/20",
    "2020/21",
    "2021/22"
]

const Years = () => {

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
          <h4>Seasons</h4>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption? selectedOption: yearsList[3]}</DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
              <DropDownList>

              {yearsList.map(year => (
                <ListItem onClick={onOptionClicked(year)} key={year}>
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