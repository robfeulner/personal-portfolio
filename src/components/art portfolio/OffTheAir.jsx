import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import offtheair from "./images.json";
import ImageModal from "./ImageModal";

function OffTheAir() {
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = offtheair.offtheair.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newLink = offtheair.offtheair[0].link;
      setClickedImage(newLink);
      return;
    }
    const newIndex = currentIndex + 1;
    const newLink = offtheair.offtheair.filter((item) => offtheair.offtheair.indexOf(item) === newIndex);
    const newItem = newLink[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = offtheair.offtheair.length;
    let newIndex;
    if (currentIndex === 0) {
      newIndex = totalLength - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    const newLink = offtheair.offtheair.filter((item) => offtheair.offtheair.indexOf(item) === newIndex);
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
    <Wrapper className={visible ? "fade-in" : ""}>
      <LeftRow>
        <H1>Off the Air episode 5x04 "NewNow (Analog Video Remix)"</H1>
        <Info>
          <PBold>Television / Web Broadcast . 2018 . 11:51</PBold>
          <PBold>Produced by The Cartoon Network / Adult Swim</PBold>
        </Info>
        <Details>
          <p>
            Adult Swim commissioned a "video remix" for an episode of their
            late-night experimental anthology series, Off the Air. An older
            episode of the series was run through a series of VCRs and video
            manipulation devices, adding strobing feedback to the image and
            pitched down warbles to the audio. The intent was to unearth a
            once clean episode after decades of decay and damage. Suddenly the
            Turner archives in Atlanta are no safer than one's childhood
            flooded basement. Your old tapes play, but they will never be the
            same.
          </p>

          <p>
            The episode can be viewed on YouTube, the Adult Swim website, and
            scheduled airings on The Cartoon Network.
          </p>
        </Details>
        <ImageDiv>
          {offtheair.offtheair.map((item, index) => (
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
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/diXjUiyFLVE"
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

export default OffTheAir;
