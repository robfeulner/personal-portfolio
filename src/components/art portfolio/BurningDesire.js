import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BurningDesire() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? 'fade-in' : ''}>
      <LeftRow>
        <H1>THE BURNING DESIRE IN A DOLLAR BILL</H1>
        <Info>
          <PBold>Video (SD) . 2017 . 5:06</PBold>
          <PBold>
            Distributed by the Canadian Filmmakers Distribution Centre
          </PBold>
        </Info>
        <Details>
          <p>
            The Burning Desire in a Dollar Bill shows how the special
            interests of media conglomerates and their parent companies mould
            our latent desires at a young age, later leaving us confused as to
            whether we are lusting after the sexually charged imagery or the
            products being advertised. The film argues that the act of
            purchasing is the strongest aphrodisiac in a capitalist society,
            leaving open the possibility that a solution to toppling
            capitalism is to shift our sexual desires from consumerism to
            political action.
          </p>
          <p>
            The film was created during a residency at Signal Culture using a
            modified Paik-Abe Raster Manipulation Unit. A running VHS tape was
            manipulated using a voltage-controlled eurorack modular
            synthesizer, allowing the object of desire to be distorted, picked
            apart, and reveal its true form of capitalist allure.
          </p>

          <p>
            Audio mixing, editing, and additional processing by Nick Maturo.
            For screening consideration please email info [at] bleunuitvideo
            [dot] com.
          </p>
        </Details>
      </LeftRow>
      <RightRow>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/227320062?h=f95db349bc"
          width="640px"
          height="360px"
          frameBorder="0"
          allowfullscreen
        />
        <Img
          src="/images/art-portfolio/burningdesire/burningdesire-01.gif"
          alt="The Burning Desire in a Dollar Bill"
        />
      </RightRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 40px;
  margin-top: 20px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 175vw;
  }
`;

const LeftRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  margin-top: 5px;
  /* margin-bottom: 15px; */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 5em;
  margin-top: 2em;
  margin-bottom: 0.5em;

  transform: scale(1, 2.5);
  -webkit-transform: scale(1, 2.5);
  -moz-transform: scale(1, 2);
  -o-transform: scale(1, 2);
  transform-origin: 0% 70%;
  @media screen and (max-width: 768px) {
    font-size: 4em;
    margin-top: 1em;
    margin-bottom: 0;

    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
    transform-origin: none;
  }
`;

const PBold = styled.p`
  /* margin-bottom: -20px; */
  font-size: 1.5em;
  font-weight: bold;
`;

const RightRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 768px) {
   margin: auto;
  }
`;

const StyledLink = styled(Link)`
  &:visited {
    color: black;
  }
  &:hover {
    color: red;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const ImgMap = styled.img`
  width: 30%;
  cursor: pointer;
`;

const Credits = styled.div`
  /* margin-top: 20px; */
`;

const CreditLine = styled.div``;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const Img = styled.img`
  width: 480px;
`;

const Iframe = styled.iframe`
  width: 100%;
`;

export default BurningDesire;
