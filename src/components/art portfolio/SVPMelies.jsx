import { React, useState, useEffect } from "react";
import styled from "styled-components";

const SVPMelies = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Cinémathèque Méliès (2501 Rue de l'Église, Val-David,
        QC)
      </Details>
      <Title>
        Video Art for Conditional Malaise <Subtitle>(Rob Feulner)</Subtitle>
      </Title>
      <Details>
        Cinémathèque Méliès is a quiet video store in a quiet town, located
        right outside of the ski-destination Mont Tremblant. On the way to your
        winter cabin you can rent a few movies to stock up for a cozy long
        weekend. It's a rare example where winter is the preferred season, one
        that brings feelings of warmth and optimism. As such, I thought it would
        be interesting to juxtapose this feeling with a loop of{" "}
        <b>Video Art for Conditional Malaise</b>.{" "}
        <a
          href="https://robfeulner.com/art-portfolio/video-art"
          target="_blank"
        >
          More information on that piece can be found here.
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

export default SVPMelies;
