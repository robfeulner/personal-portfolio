import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Updates() {
  return (
    <Wrapper>
      <Title>LATEST UPDATES</Title>
      <P>
        <strong>October 4th, 2023</strong>
      </P>
      <P>
        My film{" "}
        <StyledLink to="https://robfeulner.com/art-portfolio/cable-box">
          Cable Box
        </StyledLink>{" "}
        will be playing at the Maison de la culture Janine-Sutto on Thursday
        October 5th @ 7:30PM. There will be two other experimental shorts I'm
        looking forward to, "Ele of the Dark" by Yace Sula, and "The Future of
        Colour" by Emily Sirota. Round table discussion to follow, watch me
        flounder.
      </P>
      <StyledLink to="https://www.instagram.com/p/Cxdi6qqLo2R/" target="_blank">
        <P>Slightly more info.</P>
      </StyledLink>
      <P>
        <strong>September 2nd, 2023</strong>
      </P>
      <P>
        I&apos;ll be giving another Analog Video Glitch workshop alongside
        Guillaume Vallée and Ganesh Baron Aloir this coming January at Eastern
        Bloc. On day one Guillaume and I will be teaching the basics of video
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
`;

const StyledLink = styled(Link)`
  color: black;
  &:visited {
    color: black;
  }
`;

export default Updates;
