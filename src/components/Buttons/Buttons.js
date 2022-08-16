import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: hsl(213, 19%, 20%);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: hsl(25, 97%, 53%);
  }

  &.active {
    color: white;
    background-color: hsl(217, 12%, 63%);
  }
`;
const ratings = [1, 2, 3, 4, 5];

const Buttons = ({ handleRating }) => {
  const [active, setActive] = useState(0);

  return (
    <ButtonContainer>
      {ratings.map((rating, index) => {
        return (
          <StyledButton
            key={index}
            onClick={() => {
              handleRating(rating);
              setActive(rating);
            }}
            className={active === rating ? "active" : ""}
          >
            {rating}
          </StyledButton>
        );
      })}
    </ButtonContainer>
  );
};

export default Buttons;
