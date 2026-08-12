import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Updates() {
  return (
    <Wrapper>
      <Title>LATEST UPDATES</Title>
      <h2>
        <strong>August 11th, 2026</strong>
      </h2>
      <P>
        The premiere of{" "}
        <StyledLink to="https://tiff.net/films/ladies-and-gentlemen-brian-mulroney">
          Ladies and Gentlemen, Brian Mulroney
        </StyledLink>{" "}
        will be playing at TIFF on Tuesday September 15th as part of their
        Midnight Madness programming. It's directed by the wonderful Matthew
        Rankin, and I did a lot of insane analog video glitch for the
        production. Mulroney, Clark, and the rest of the Canadian conservative
        cabal of the 70s and 80s are really put through the video ringer.
      </P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: left;
`;

const P = styled.p`
  font-size: 1.25em;
  margin-top: -5px;
`;

const StyledLink = styled(Link)`
  color: black;
  &:visited {
    color: black;
  }
`;

export default Updates;
