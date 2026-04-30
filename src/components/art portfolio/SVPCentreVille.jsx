import { React, useState, useEffect } from "react";
import styled from "styled-components";

const SVPCentreVille = () => {
  return (
    <Wrapper>
      <Details>
        <b>Location:</b> Video Centre-Ville (230 Rue Marie-de-l'Incarnation,
        Québec, QC)
      </Details>
      <Title>
        1-9-9-9, for Analog Broadcast <Subtitle>(Rob Feulner)</Subtitle>
      </Title>
      <Details>
        Further exploring the mediums in which genres travel, we couldn't help
        but notice the old CRT with the rabbit ears antenna stuck in the Video
        Centre-Ville basement, blasting black-and-white static as if an outside
        forced knocked out the signal. Taking advantage of this, I started
        playing with low-frequency video broadcast, transmitting video loops via
        UHF, creating interference with tinfoil, alligator clips, other
        electronics, and my body. One of those experiments resulted in a loop of
        John Carpenter's corporeal demon masterpiece <i>Prince of Darnkess</i>,
        a dream transmission, a now literal transmission, buried in static and
        interference. How does your presence, perusing in the aisles, affect the
        image?
      </Details>
      <Title>
        PREPA <Subtitle>(Rob Feulner)</Subtitle>
      </Title>
      <Details>
        An adaptation of a work in progress exploring the Puerto Rico Electric
        Power Authority, this piece sits as a 5" CRT hidden in the store, a
        small hypnotic rhythm by the checkout as you swipe debit cards again and
        again and again. <i>PREPA</i> is an example of vector synthesis, audio
        signals sent to an oscilloscope to create geometric art.
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

export default SVPCentreVille;
