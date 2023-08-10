import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import carmen from "./images.json";
import ImageModal from "./ImageModal";

function Carmen() {
  const [visible, setVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = carmen.carmen.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newLink = carmen.carmen[0].link;
      setClickedImage(newLink);
      return;
    }
    const newIndex = currentIndex + 1;
    const newLink = carmen.carmen.filter((item) => carmen.carmen.indexOf(item) === newIndex);
    const newItem = newLink[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = carmen.carmen.length;
    let newIndex;
    if (currentIndex === 0) {
      newIndex = totalLength - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    const newLink = carmen.carmen.filter((item) => carmen.carmen.indexOf(item) === newIndex);
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
        <H1>CARMEN</H1>
        <Info>
          <PBold>Video (SD) . 2018/2020 . 14:53</PBold>
        </Info>
        <Details>
          <p>
            Originally an audio collaboration with Mitchell Stafiej, then
            transformed into a solo A/V performance for Télépresence II (2018,
            NYC), and finally released as a standalone VHS tape, Carmen is the
            story of a woman whose separation from her loved ones is heard
            through telephone wires. Dedicated to my mom.
          </p>
          <p>Audio mixed and mastered by Nick Maturo.</p>
          <p>
            For screening consideration please email info [at] bleunuitvideo
            [dot] com.
          </p>
          <p>
            <strong>
              <StyledLink
                to="https://bleunuitvideo.bandcamp.com/album/carmen"
                target="_blank"
              >
                VHS tapes available from Bleu Nuit Video.
              </StyledLink>
            </strong>
          </p>
        </Details>
        <ImageDiv>
          {carmen.carmen.map((item, index) => (
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
          src="https://player.vimeo.com/video/406939337?h=ca3aaab419"
          width="640"
          height="360"
          frameBorder="0"
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

export default Carmen;
