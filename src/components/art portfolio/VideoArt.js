import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoart from "./images.json";
import ImageModal from "./ImageModal";

const VideoArt = () => {
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = videoart.videoart.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newLink = videoart.videoart[0].link;
      setClickedImage(newLink);
      return;
    }
    const newIndex = currentIndex + 1;
    const newLink = videoart.videoart.filter((item) => {
      return videoart.videoart.indexOf(item) === newIndex;
    });
    const newItem = newLink[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = videoart.videoart.length;
    let newIndex;
    if (currentIndex === 0) {
      newIndex = totalLength - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    const newLink = videoart.videoart.filter((item) => {
      return videoart.videoart.indexOf(item) === newIndex;
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
          <H1>Video Art for Conditional Malaise</H1>
          <Info>
            <PBold>DVD / Performance / Installation . 2017 . 29:04</PBold>
          </Info>
          <Details>
            <p>
              Produced between 2016 and 2017, "Video Art for Conditional
              Malaise" is a tool intended for those suffering from bouts of
              seasonal depression or general malaise in our modern political
              climate.
            </p>

            <p>
              For thirty minutes flowers bloom and float into video feedback
              ether, set to the experimental-ambient music of Billy Gomberg. For
              its intended effect, please view using a projector against a large
              white wall, with the audio set to a louder than usual volume. The
              goal is full immersion.
            </p>
            <p>
              Premiere public screening occurred at Newfields Indianapolis
              Museum of Art in April 2018. A live variation of the piece was
              performed with Billy Gomberg in Brooklyn, NY in April 2017.
            </p>
            <StyledLink
              to="https://bleunuitvideo.bandcamp.com/album/video-art-for-conditional-malaise"
              target="_blank"
            >
              <p>
                <strong>DVD available through Bleu Nuit Video.</strong>
              </p>
            </StyledLink>
          </Details>
          <ImageDiv>
            {videoart.videoart.map((item, index) => (
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
        </LeftRow>
        <RightRow>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/222565611?h=5e900c3629"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
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
  margin-bottom: 0;
  margin-top: 0em;
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
`;

export default VideoArt;
