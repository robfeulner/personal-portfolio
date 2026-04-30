import React from "react";
import styled from "styled-components";

function BioDiv() {
  return (
    <Wrapper>
      <BioSpan>
        <b>Rob Feulner</b> (b. 1987) is a video artist hailing from Montréal, Québec.
        Armed with a stack of VCRs, circuit-bent equipment, and a disregard for
        electrical shocks, Rob Feulner dives wrist-deep into open machinery to
        manipulate tape heads and moving parts, creating a landscape of video
        tracking errors and glitches used to confront modern political malaise.
        His work has appeared in the Indianapolis Museum of Art, has been
        broadcasted by The Cartoon Network, and performed alongside MacArthur
        Fellowship prize winner Anne Carson during a performance of her play
        Antigone. Established in 2014, Feulner's video art label Bleu Nuit Video
        curates underrepresented like-minded artists through DVD and VHS home
        releases.
      </BioSpan>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: min(100%, 70ch);
  gap: 2vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10%;
  }
`;

const BioSpan = styled.span`
  font-size: 1.25em;
  line-height: 1.55;

  @media screen and (max-width: 768px) {
    font-size: 1.05em;
  }
`;

export default BioDiv;
