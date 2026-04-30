import { React, useState, useEffect } from "react";
import styled from "styled-components";

const SVPFilmFanatik = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Film Fanatik (<i>Marché Aux Puces Saint-Michel</i>,
        7707 Av. Shelley, Montréal)
      </Details>
      <Title>
        DVD Bouncing Logo 4:3 <Subtitle>(Rob Feulner)</Subtitle>
      </Title>
      <Details>
        VHS receives a lot of attention for its unique characteristics, and I'm
        certainly guilty of such, whereas DVD seems to just be considered a disc
        that contains a movie. Ignored is its storybook design of menus,
        chapters, and easter eggs. Moreover, when left on its own, it begins to
        play with itself, an act of digital boredom to pass the time and combat
        monotony (or screen burning if you want to be technical about it.){" "}
        <b>Bouncing DVD Logo 4:3</b> shines light on this fascinating feature,
        taking the standard in-motion DVD logo and running it through various
        feedback-heavy video synthesizers. The DVD logo multiplies, disappears,
        rotates, and covers the whole screen. You can't be funky if you haven't
        got a soul. The video is burned to a looping DVD and is on display using
        the store monitor that would normally be utilized to play a
        family-friendly movie. A 16:9 counterpart was created by Sam Meech and
        displayed at Video Centre Ville.
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

export default SVPFilmFanatik;
