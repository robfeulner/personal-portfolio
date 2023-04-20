import styled from "styled-components";
import Updates from "./Updates";

const Home = () => {
  return (
    <>
      <Wrapper>
        <BioDiv>
          <BioSpan>
            Rob Feulner (b. 1987) is a video artist hailing from Montréal,
            Québec. Armed with a stack of VCRs, circuit-bent equipment, and a
            disregard for electrical shocks, Rob Feulner dives wrist-deep into
            open machinery to manipulate tape heads and moving parts, creating a
            landscape of video tracking errors and glitches used to confront
            modern political malaise. His work has appeared in the Indianapolis
            Museum of Art, has been broadcasted by The Cartoon Network, and
            performed alongside MacArthur Fellowship prize winner Anne Carson
            during a performance of her play Antigone. Established in 2014,
            Feulner's video art label Bleu Nuit Video curates underrepresented
            like-minded artists through DVD and VHS home releases.
          </BioSpan>
        </BioDiv>
        <SecondRow>
          {/* <ImgRow> */}
            <ImgPress
              src="/images/robfeulner_press08-1200.jpg"
              alt="Rob Feulner"
            />
          {/* </ImgRow> */}
          <Updates />
        </SecondRow>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BioDiv = styled.div`
  max-width: 70%;
`;

const BioSpan = styled.span`
  font-size: 1.25em;
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`;

const ImgRow = styled.div`
  
`;

const ImgPress = styled.img`
  max-width: 50%;
  margin-right: 5%;
`;

export default Home;
