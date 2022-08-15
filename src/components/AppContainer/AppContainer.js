import React from "react";
import styled from "styled-components";
import { useState } from "react";

import IconStar from "../../images/icon-star.svg";
import Buttons from "../Buttons/Buttons";

const StyledAppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 350px;
  height: 375px;
  padding: 25px;
  border-radius: 20px;
  background: linear-gradient(180deg, hsl(213, 19%, 16%), hsl(213, 19%, 10%));
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
  font-weight: 600;
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

  &:active {
    color: white;
    background-color: hsl(25, 97%, 53%);
    cursor: pointer;
  }
`;

const AppContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  console.log(submitted, rating);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmitted(true);
  };

  if (!submitted) {
    return (
      <StyledAppContainer>
        <StarContainer>
          <StarImage src={IconStar} />
        </StarContainer>
        <Header>How did we do?</Header>
        <Paragraph>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Paragraph>
        <Buttons handleRating={setRating} />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </StyledAppContainer>
    );
  } else {
    return <div>Hello</div>;
  }
};

export default AppContainer;
