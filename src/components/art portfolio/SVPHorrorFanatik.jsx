import { React, useState, useEffect } from "react";
import styled from "styled-components";

const SVPHorrorFanatik = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Horror Fanatik (<i>Marché Aux Puces Saint-Michel</i>,
        7707 Av. Shelley, Montréal)
      </Details>
      <Title>
        Monster Movies <Subtitle>(Rob Feulner & Sam Meech)</Subtitle>
      </Title>
      <Details>
        The relation between horror movies and VHS is well documented, and on
        full display at Horror Fanatik. <b>Monster Movies</b>, a collaboration
        between myself and Sam Meech, explores how the signal loss and
        degradation lends to the horror genre. Does a cassette riddled with
        tracking errors bring to mind another unexplainable world? I think of
        Lovecraftian textures in video glitch, those that our mortal coils and
        feeble minds aren't yet privvy to, but only revealed in our final
        moments, a spectrum of life and death revealed to us. To celebrate this,
        Sam and I created an array of video portraits from vaerious horror
        films, as if monsters from{" "}
        <i>Children Shouldn't Play with Dead Things</i> and <i>Creepshow</i>{" "}
        were members of Andy Warhol's Factory. The 12-minute loop was dubbed to
        VHS, repeating for six hours, displayed on a 13" CRT, rewound, played
        again. An inescapable cycle.
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

export default SVPHorrorFanatik;
