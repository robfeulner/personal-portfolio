import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cablebox from "./images.json";
import ImageModal from "./ImageModal";

const PuertoRicoTautology = () => {
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
    const newLink = cablebox.cablebox.filter((item) => {
      return cablebox.cablebox.indexOf(item) === newIndex;
    });
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
    const newLink = cablebox.cablebox.filter((item) => {
      return cablebox.cablebox.indexOf(item) === newIndex;
    });
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
    <>
      <Wrapper className={visible ? "fade-in" : ""}>
        <LeftRow>
          <H1>PUERTO RICO TAUTOLOGY</H1> <H1>(14 dubs high)</H1>
          <Info>
            <PBold>Video (SD) . 2016 . 16:45</PBold>
            <PBold>Distributed by Vidéographe</PBold>
          </Info>
          <Details>
            <p>
              Found footage of Puerto Rican families celebrating in the street
              to the music of the Fania All-Stars. The clip, recorded on VHS, is
              repeatedly copied to VHS until the image disappears completely.
            </p>
            <p>
              Images trouvées de familles portoricaines célébrant dans les rues
              au son du groupe Fania All-Stars. La séquence, enregistrée sur
              VHS, a été copiée sur VHS à répétition, jusqu’à sa disparition.
            </p>

            <p>
              Puerto Rico Tautology (14 dubs high) was recorded in 2015 and
              completed in early 2016. Found footage of Puerto Rican families
              celebrate in the street as the Fania All-Stars perform in the
              background. The clip, recorded on VHS, is dubbed to another VHS
              tape and played again. The image and sound gradually decay with
              each dub, until the image breaks completely. Inspired by the mass
              exodus of Puerto Ricans moving to Orlando, Florida, this piece is
              an illustration of the economic degradation of Puerto Rico. As
              with the video image, the island is losing its vibrancy and
              colour, but more alarmingly Puerto Rico is being robbed of its
              resources and standard of living through increasing debt of Wall
              Street hedge funds. This is also represented through the audio, as
              the crowd and the music are gradually distorted and difficult to
              hear. Illinois House of Representatives member Luis Gutiérrez can
              be heard over the VHS audio, pleading with Congress to allow
              Puerto Rico to declare bankruptcy. As the distortion increases,
              the house member's message becomes less clear, lost in the ether
              of the ignored United States territory.
            </p>

            <p>
              Under non-exclusive distribution with Vidéographe. For screening
              consideration please email info [at] bleunuitvideo [dot] com.
            </p>
          </Details>
          <Credits>
            <PBold>SCREENINGS</PBold>
            <CreditLine>
              <BoldSpan>
                International Film Festival ZOOM Zblizenia (premiere)
              </BoldSpan>{" "}
              . Poland . 2016
            </CreditLine>
            <CreditLine>
              <BoldSpan>Jornadas de Reapropiación</BoldSpan>. Mexico . 2016
            </CreditLine>
            <CreditLine>
              <BoldSpan>Rendez-vous du cinéma québécois</BoldSpan> . Canada .
              2016
            </CreditLine>
            <CreditLine>
              <BoldSpan>8th Cairo Video Festival</BoldSpan> . Egypt . 2016
            </CreditLine>
            <CreditLine>
              <BoldSpan>Montreal Underground Film Festival</BoldSpan> . Canada .
              2017
            </CreditLine>
            <CreditLine>
              <BoldSpan>Marseille Underground Film Festival</BoldSpan> . France
              . 2017
            </CreditLine>
          </Credits>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/150300380?h=e757a1faaf"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </LeftRow>
        <RightRow>
          <ImgPoster
            src="/images/art-portfolio/puertoricotautology/puertoricotautology-poster-1200.jpg"
            alt="Cable Box poster"
          />
        </RightRow>
      </Wrapper>
    </>
  );
};

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
  margin: 0;
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
  margin-bottom: 1em;
`;

const CreditLine = styled.div``;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ImgPoster = styled.img`
  @media screen and (max-width: 768px) {
    width: 175vw;
  }
`;

const Iframe = styled.iframe`
  margin-top: 10px;
  /* width: 80%; */
`;

export default PuertoRicoTautology;
