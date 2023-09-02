import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Updates() {
  return (
    <Wrapper>
      <Title>LATEST UPDATES</Title>
      <P>
        <strong>September 2nd, 2023</strong>
      </P>
      <P>
        I&apos;ll be giving another Analog Video Glitch workshop alongside
        Guillaume Vallée and Ganesh Baron Aloir this coming January at Eastern
        Bloc. One day one Guillaume and I will be teaching the basics of video
        glitch forms, from video feedback to VHS manipulation. We'll have an
        assortment of circuit bent machinery for the class to use and
        experiment, recording direct to tape. Day two Ganesh will be leading the
        class on how to build their very own "dirty mixer." No circuit bending
        or soldering experience required!
      </P>
      <StyledLink
        to="https://www.eventbrite.ca/e/exploration-de-lart-video-a-travers-le-vhs-et-le-glitch-analogique-tickets-690986086987?aff=oddtdtcreator"
        target="_blank"
      >
        <P>Sign up via Eastern Bloc.</P>
      </StyledLink>
      <P>
        <strong>April 19th, 2023</strong>
      </P>
      <P>
        THE DIABETIC, a feature-length film by Mitchell Stafiej, is now
        available for free streaming on Tubi. I created visual effects seen
        during the opening segment, and collaborated with Mitchell for the
        original score under the project name FUCKERS. It&apos;s a wild film, a
        must for fans of The Comedy, Good Time, and lo-fi mayhem.
      </P>
      <StyledLink
        to="https://tubitv.com/movies/724073/the-diabetic"
        target="_blank"
      >
        <P>View THE DIABETIC on Tubi.</P>
      </StyledLink>
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
