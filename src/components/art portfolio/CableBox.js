import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cablebox from './images.json';
import ImageModal from './ImageModal';

function CableBox() {
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = cablebox.cablebox.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newLink = cablebox.cablebox[0].link;
      setClickedImage(newLink);
      return;
    }
    const newIndex = currentIndex + 1;
    const newLink = cablebox.cablebox.filter((item) => cablebox.cablebox.indexOf(item) === newIndex);
    const newItem = newLink[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = cablebox.cablebox.length;
    let newIndex;
    if (currentIndex === 0) {
      newIndex = totalLength - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    const newLink = cablebox.cablebox.filter((item) => cablebox.cablebox.indexOf(item) === newIndex);
    const newItem = newLink[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? 'fade-in' : ''}>
      <LeftRow>
        <H1>CABLE BOX</H1>
        <Info>
          <PBold>Video (SD) . 2021 . 16:45</PBold>
          <PBold>Funded by the Canada Council of the Arts</PBold>
          <PBold>Distributed by Vidéographe</PBold>
        </Info>
        <Details>
          <p>
            Taking place in an unspecified year in the early 1990s, a night of
            mindless television channel flipping is slowly interrupted and
            overtaken by a pirate television signal. A flood of colours
            emanating from video feedback, warring tribes displayed through a
            modified oscilloscope, and a flurry of gun violence repeated via
            luminance keying dominate stations one by one. Abstract imagery
            through analog video glitch techniques forewarn the passive
            television viewer that the far-right American political system to
            come will not be the result of a sudden shift. Instead we will see
            a rise of increasingly conservative policies followed by a
            moulding of public perception by broadcast television. As Cable
            Box progresses, commercials, sitcoms, and nightly news segments
            begin to highlight the true nature of broadcast television: to
            serve the financial and neoliberal interests of media
            conglomerates.
          </p>

          <p>
            Composed of found footage sourced through hundreds of VHS tapes,
            Cable Box is faithful to the video-art tradition of turning the
            analog television signal against itself. Like Nam June Paik and
            Richard Serra before him, director Rob Feulner (b. 1987) uses
            broadcast television tools to demonstrate that the television
            signal controls society for an elite agenda while creating
            thematic links to our current Internet landscape.
          </p>

          <p>
            Under non-exclusive distribution with Vidéographe. For screening
            consideration please email info [at] bleunuitvideo [dot] com. I'm
            also very interested in public access television broadcasts, and
            have developed a 28-minute program which includes films by
            {' '}
            <StyledLink
              to="https://palomakop.tv/works/magnetic-field-recordings/"
              target="_blank"
            >
              Paloma Kop
            </StyledLink>
            {' '}
            and
            {' '}
            <StyledLink
              to="https://www.charlotteclermont.com/pages/lucina-annulata"
              target="_blank"
            >
              Charlotte Clermont
            </StyledLink>
            .
          </p>
        </Details>
        <ImageDiv>
          {cablebox.cablebox.map((item, index) => (
            <ImgMap
              key={index}
              src={item.link}
              alt={item.description}
              onClick={() => handleClick(item, index)}
            />
          ))}
        </ImageDiv>
        {clickedImage && (
        <ImageModal
          clickedImage={clickedImage}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          setClickedImage={setClickedImage}
        />
        )}
        <PBold>CREDITS</PBold>
        <Credits>
          <CreditLine>
            <BoldSpan>Director:</BoldSpan>
            {' '}
            Rob Feulner
          </CreditLine>
          <CreditLine>
            <BoldSpan>Writer:</BoldSpan>
            {' '}
            Rob Feulner
          </CreditLine>
          <CreditLine>
            <BoldSpan>Editor:</BoldSpan>
            {' '}
            Rob Feulner
          </CreditLine>
          <CreditLine>
            <BoldSpan>Producer:</BoldSpan>
            {' '}
            Max Séguéla
          </CreditLine>
          <CreditLine>
            <BoldSpan>Musical Score:</BoldSpan>
            {' '}
            Nick Maturo
          </CreditLine>

          <CreditLine>
            <BoldSpan>Sound Designer:</BoldSpan>
            {' '}
            Sacha Ratcliffe
          </CreditLine>

          <CreditLine>
            <BoldSpan>Sound Mixer:</BoldSpan>
            {' '}
            Bernard Gariépy Strobl
          </CreditLine>

          <CreditLine>
            <BoldSpan>Post-Production Supervisors:</BoldSpan>
            {' '}
            Bertrand
            Paquette & Simon Allard
          </CreditLine>

          <CreditLine>
            <BoldSpan>Online Editor:</BoldSpan>
            {' '}
            Hugo Mazo
          </CreditLine>

          <CreditLine>
            <BoldSpan>Color Corrector:</BoldSpan>
            {' '}
            Martin Gaumond
          </CreditLine>
          <CreditLine>
            <BoldSpan>Poster Design:</BoldSpan>
            {' '}
            Paloma Kop
          </CreditLine>
        </Credits>

        <PBold>SCREENINGS</PBold>
        <CreditLine>
          <BoldSpan>Festival ECRÃ (world premiere)</BoldSpan>
          . Rio de Janeiro
          . July 2021
        </CreditLine>
        <CreditLine>
          <BoldSpan>
            Guangzhou International Documentary Film Festival
          </BoldSpan>
          . Guangzhou, China . Dec 2021
        </CreditLine>
        <CreditLine>
          <BoldSpan>Cinema on the Bayou Film Festival</BoldSpan>
          {' '}
          . Louisiana,
          USA . Jan 2022
        </CreditLine>
        <CreditLine>
          <BoldSpan>Austin Public (television broadcast)</BoldSpan>
          {' '}
          . Texas,
          USA . June 2022
        </CreditLine>
      </LeftRow>
      <RightRow>
        <ImgPoster
          src="/images/art-portfolio/cable-box/poster-web-1200.jpg"
          alt="Cable Box poster"
        />
        <Iframe
          width="840"
          height="472"
          src="https://www.youtube.com/embed/AszPBOFhT_A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  margin-top: 1em;
  margin-bottom: 0;

  transform: scale(1, 3);
  -webkit-transform: scale(1, 3);
  -moz-transform: scale(1, 3);
  -o-transform: scale(1, 3);
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
  @media screen and (max-width: 768px) {
    width: 100%;
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

const ImgPoster = styled.img``;

const Iframe = styled.iframe`
  margin-top: 10px;
  /* width: 80%; */
@media screen and (max-width: 768px) {
  width: 100%;
}
`;

export default CableBox;
