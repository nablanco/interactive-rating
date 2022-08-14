import styled from "styled-components";

const StyledAttribution = styled.div`
  font-size: 11px;
  text-align: center;
  color: hsl(0, 0%, 75%);

  & a {
    color: hsl(0, 0%, 75%);
  }
`;

const Attribution = () => {
  return (
    <StyledAttribution>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/nablanco/interactive-rating">
        Nicholas Blanco
      </a>
      .
    </StyledAttribution>
  );
};

export default Attribution;
