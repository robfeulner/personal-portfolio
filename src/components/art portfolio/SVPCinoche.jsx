import { React, useState, useEffect } from "react";
import styled from "styled-components";

const SVPCinoche = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Cinoche Video (2210 Mont-Royal Ave E, Montreal)
      </Details>
      <Title>
        Dogshit '95 <Subtitle>(Rob Feulner & Sam Meech)</Subtitle>
      </Title>
      <Details>
        As a video artist, 95% of my work is experimentation, and never sees the
        light of day perhaps outside of a temporary Instagram story. Utilizing a
        5-disc DVD changer, Sam Meech and & filled it up with forgotten video
        experiments, moments where we were proud of our work but never found it
        a proper home. Finally, an excuse for public display, something that
        justifies the time spent in a darkened room surrounded by screens and
        devices considered garbage.
      </Details>
      <Title>
        The Burning Desire in a Dollar Bill{" "}
        <Subtitle>(by Rob Feulner)</Subtitle>
      </Title>
      <Details>
        More information on this piece{" "}
        <a
          href="http://robfeulner.com/art-portfolio/burning-desire"
          target="_blank"
        >
          can be seen here.
        </a>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const LocationDetails = styled.span``;

const Details = styled.p`
  font-size: 1.25em;
`;

const Title = styled.h2``;

const Subtitle = styled.span`
  font-weight: lighter;
  font-style: italic;
`;

export default SVPCinoche;
