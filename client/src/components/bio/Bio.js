import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BioDiv from "./BioDiv";

const Bio = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const email = isHovered
    ? "S̷e̴n̶d̷ ̴m̷e̷ ̸a̵n̷ ̷e̴m̸a̷i̵l̴ ̴a̷t̴ ̷i̴n̴f̶o̸ ̶[̸@̴]̶ ̸b̶l̶e̴u̸n̸u̴i̸t̴v̵i̸d̷e̴o̸ ̸[̸d̸o̴t̶]̴ ̵c̷o̵m̵"
    : "Send me an email at info [@̴̡̨̘͕̀̄̈̅] bleunuitvideo [ḓ̸͓̥̪͆̀͂̕o̸͇̬̗̫͆́̕ṯ̶̣͋́͊̕] com";
  const transition = "color 0.2s ease-in-out";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Wrapper className={visible ? "fade-in" : ""}>
        <BioDiv />
        <LinkDiv>
          <StyledLink to="mailto:info@bleunuitvideo.com">
            <EmailH2
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ transition }}
            >
              {email}
            </EmailH2>
          </StyledLink>
        </LinkDiv>

        <CVSection>
          <LeftDiv>
            <h1>Education</h1>
          </LeftDiv>
          <RightDiv>
            <h3>Diploma - Full Stack Web Development</h3>
            <p>Concordia University, Montréal, QC</p>
            <p>2023</p>
            <h3>Bachelor of Fine Arts - Film Studies</h3>
            <p>
              Mel Hoppenheim School of Cinema, Concordia University, Montreal,
              QC
            </p>
            <p>2007 - 2011</p>
            <h3>DEC - Cinema Communications</h3>
            <p>Dawson College, Montreal, QC</p>
            <p>2004 - 2006</p>
          </RightDiv>
        </CVSection>
        <CVSection>
          <LeftDiv>
            <h1>Selected Film + Video</h1>
          </LeftDiv>
          <RightDiv>
            <h3>“Cable Box” – 17MIN – HD – 2021</h3>
            <p>Director and Editor</p>
            <p>Funded by the Canada Council for the Arts</p>
            <p>Distributed by Vidéographe</p>
            <p>Premiered at 6e Festival ECRA (Brazil) in 2021</p>
            <h3>“The Diabetic” – 1HR 34MIN – 16MM/HD – 2021</h3>
            <p>Visual Effects</p>
            <p>Premiered at Fantasia Festival (Canada) in 2021</p>
            <h3>“Pivot, Forward, Collapse” – 3MIN – SD – 2020</h3>
            <p>Director, Editor, and Sound Designer</p>
            <p>Premiered at Le Guess Who? Festival (Netherlands) in 2020</p>
            <h3>
              “Off the Air 5x04: NewNow (Analog Video Remix)” – 11MIN – HD –
              2018
            </h3>
            <p>Director</p>
            <p>Produced by The Cartoon Network</p>
            <p>
              Broadcast on The Cartoon Network television station and presented
              on
              <p></p>AdultSwim.com in 2018
            </p>
            <h3>“The Burning Desire in a Dollar Bill” – 5MIN – SD – 2018</h3>
            <p>Director, Editor, Sound Designer, and Producer</p>
            <p>Distributed by Canadian Filmmakers Distribution Centre</p>
            <h3>"Video Art for Conditional Malaise" – 29min – SD – 2017</h3>
            <p>Director and Editor</p>
            <p>
              Presented as an audio/visual performance at Flux Factory (NYC)
              alongside Billy Gomberg in April 2017
            </p>
            <p>
              Premiered at Newfields Indianapolis Museum of Art in April 2018
            </p>
            <h3>"Puerto Rico Tautology" – 7MIN – SD – 2016</h3>
            <p>Director, Editor, Sound Designer, and Producer</p>
            <p>Distributed by Vidéographe</p>
            <p>
              Premiered at International Film Festival ZOOM- Zblizenia (Poland)
            </p>
          </RightDiv>
        </CVSection>
        <CVSection>
          <LeftDiv>
            <h1>Installation</h1>
          </LeftDiv>
          <RightDiv>
            <h3>“Unstable Intermediated Forms”</h3>
            <p>Multi-channel interactive installation</p>
            <p>Co-creator and designed with Sam Meech</p>
            <p>Presented by Agence TOPO (5445 de Gaspé, Montréal)</p>
            <p>October 2021 to January 2022</p>
            <h3>“Man and His Progress”</h3>
            <p>Single-channel projection</p>
            <p>Comissioned by Eastern Bloc and Never Apart for Nuit Blanche</p>
            <p>Presented by Eastern Bloc (Montréal)</p>
            <p>March 2017</p>
          </RightDiv>
        </CVSection>
        <CVSection>
          <LeftDiv>
            <h1>Workshops</h1>
          </LeftDiv>
          <RightDiv>
            <h3>Explorations in Video Art Through VHS and Analog Glitch</h3>
            <p>Eastern Bloc, 2015 to Present</p>
            <p>
              A multi-day seminar and hands-on workshop led by myself and
              colleague Guillaume Vallée held twice a year wherein students were
              taught the basics of analog video glitch techniques and were able
              to use circuit-bent processors otherwise unavailable to them.
            </p>
            <h3>Analogue Glitch Workshop</h3>
            <p>April / May 2022</p>
            <p>
              Co-presented with Sam Meech, this workshop taught students how to
              create art using obsolete technology. We took advantage of
              Videographe's archive of 70s video cameras and decks to reuse and
              recycle forgotten means of communication and live performance.
            </p>
          </RightDiv>
        </CVSection>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:visited {
    color: blue;
  }
`;

const EmailH2 = styled.h2`
  color: blue;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;

const LinkDiv = styled.div``;

const CVSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.div`
  min-width: 30%;
`;

const RightDiv = styled.div``;

export default Bio;
