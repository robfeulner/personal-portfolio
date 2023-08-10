import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import offtheair from "./images.json";

function ManAndHisProgress() {
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
    const newLink = offtheair.offtheair.filter(
      (item) => offtheair.offtheair.indexOf(item) === newIndex,
    );
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
    const newLink = offtheair.offtheair.filter(
      (item) => offtheair.offtheair.indexOf(item) === newIndex,
    );
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
          <H1>Man and His Progress</H1>
          <Info>
            <PBold>Single-Channel Projection . 2017 . 4:46</PBold>
            <PBold>Commissioned by Eastern Bloc and Never Apart (Québec)</PBold>
          </Info>
          <Details>
            <p>
              Mimicking the federally-funded travelogues and documentaries of
              Expo 67, Man and His Progress attempts to distinguish the concept
              of 'progression' from the action of 'time passing.' Four streams
              of Expo 67 footage play the marvels of Québecois production and
              list the updated statistics of Canada's humanitarian and
              scientific efforts. While the perspective of the video signal
              becomes askew, as does our perspective of what progression means
              in a capitalist and neoliberal system.
            </p>

            <p>
              Commissioned as a looping video installation by Eastern Bloc for
              Social Habitat, a Nuit Blanche co-presentation with Never Apart
              exploring works inspired by Expo 67.
            </p>
            <p>
              For screening consideration please contact via info [at]
              bleunuitvideo [dot] com
            </p>
          </Details>

          <PBold>CREDITS</PBold>
          <Credits>
            <CreditLine>
              <BoldSpan>Voice #1:</BoldSpan> Maica Armata-Boles
            </CreditLine>
            <CreditLine>
              <BoldSpan>Voice #2:</BoldSpan> Matt Smith
            </CreditLine>
            <CreditLine>
              <BoldSpan>Script Translation:</BoldSpan> Samuel Bonneau
            </CreditLine>
          </Credits>
        </LeftRow>
        <RightRow>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/206337245?h=505a53b22f"
            width="640"
            height="360"
            frameBorder="0"
            allowfullscreen
          />
        </RightRow>
      </Wrapper>
      <ImageArray>
        <img
          src="/images/art-portfolio/manandhisprogress/manandhisprogress-01.jpg"
          alt="Man and His Progress"
        />
        <img
          src="/images/art-portfolio/manandhisprogress/manandhisprogress-02.jpg"
          alt="Man and His Progress"
        />
      </ImageArray>
      <PBold>Images courtesy of Never Apart</PBold>
    </>
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
  margin-top: 1em;
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
  margin-bottom: 1em;
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

const ImageArray = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 10%;
    flex-direction: column;
    width: 175vw;
  }
`;

export default ManAndHisProgress;
