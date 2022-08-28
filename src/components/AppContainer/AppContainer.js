import React from "react";
import styled from "styled-components";
import { useState } from "react";

import StarIcon from "../../images/icon-star.svg";
import ThankYouIllustration from "../../images/illustration-thank-you.svg";
import Buttons from "../Buttons/Buttons";

const StyledRatingContainer = styled.div`
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: hsl(213, 19%, 20%);
`;
const StarImage = styled.img``;
const Header = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 1px;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
`;
const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
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
const StyledThankYouContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 375px;
  padding: 25px;
  border-radius: 20px;
  background: linear-gradient(180deg, hsl(213, 19%, 16%), hsl(213, 19%, 10%));
`;
const ThankYouImage = styled.img`
  /* width: 60%; */
`;
const SelectedRaitingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 45px;
  color: hsl(25, 97%, 53%);
  background: hsl(213, 19%, 20%);
  border-radius: 25px;
`;

const AppContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return !submitted ? (
    <StyledRatingContainer>
      <StarContainer>
        <StarImage src={StarIcon} />
      </StarContainer>
      <Header>How did we do?</Header>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
      <Buttons handleRating={setRating} />
      <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
    </StyledRatingContainer>
  ) : (
    <StyledThankYouContainer>
      <ThankYouImage src={ThankYouIllustration} />
      <SelectedRaitingContainer>
        You selected {rating} out of 5
      </SelectedRaitingContainer>
      <Header>Thank You!</Header>
      <Paragraph style={{ textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Paragraph>
    </StyledThankYouContainer>
  );
};

export default AppContainer;
