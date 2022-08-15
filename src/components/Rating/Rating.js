import React from "react";
import styled from "styled-components";
import { useState } from "react";

import IconStar from "../../images/icon-star.svg";
import Buttons from "../Buttons/Buttons";

const StyledRatingContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 325px;
  margin: 25px;
`;
const StarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: hsl(213, 19%, 20%);
`;
const StarImage = styled.img``;
const Header = styled.h2`
  color: white;
  font-weight: 500;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
`;
const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  color: white;
  background-color: hsl(25, 97%, 53%);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;

  &:hover {
    color: hsl(25, 97%, 53%);
    background-color: white;
    cursor: pointer;
  }

  &.active:hover {
    color: white;
    background-color: hsl(25, 97%, 53%);
    cursor: pointer;
  }

  &.active {
    color: white;
    background-color: hsl(25, 97%, 53%);
    cursor: pointer;
  }
`;

const RatingContainer = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <StyledRatingContainer>
      <StarContainer>
        <StarImage src={IconStar} />
      </StarContainer>
      <Header>How did we do?</Header>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
      <Buttons handleClick={setRating} />
      <SubmitButton>Submit</SubmitButton>
    </StyledRatingContainer>
  );
};

export default RatingContainer;