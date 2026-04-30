import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SVPCheapThrills = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Cheap Thrills (2044 Rue Metcalfe, Montreal)
      </Details>
      <Title>
        Runway / Generative Fiction{" "}
        <Subtitle>(Rob Feulner & Sam Meech)</Subtitle>
      </Title>
      <Details>
        Finding existing video stores in Montreal, well anywhere, isn't a
        particularly easy task. That said, I was happy for Sam and I to open the
        installation up to businesses that also cater to used home video buyers
        because it gave an excuse to suggest Cheap Thrills. For 20 years I've
        spent my paychecks there, taking a chance on cool looking albums like
        Earth 2 or Set Fire to Flames. Their new location (right downstairs from
        their old location) has an unplugged glass meat fridge, the perfect spot
        for a couple of 125lb Sony Trinitrons.
      </Details>
      <Details>
        <b>Runway / Generative Fiction</b> is a collaboration between Sam Meech
        and I, where we basically smushed and expanded two existing artworks
        onto two CRTs. Video experiments using a Japanese artist singing
        nationalist folk music, losing sync with reality through circuit-bent
        processors, video feedback, and the Dead C as a manipulaion source. This
        is mixed with Sam's beat poetry teletext, bouncing in perspective
        through live camera video feedback. The two images mix, separate, and
        come apart at the seams over two vertically stacked television sets.
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

export default SVPCheapThrills;
