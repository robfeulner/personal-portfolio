import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PivotForwardCollapse() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? "fade-in" : ""}>
      <LeftRow>
        <H1>PIVOT, FORWARD, COLLAPSE</H1>
        <Info>
          <PBold>Video (SD) . 2020 . 2:51</PBold>
        </Info>
        <Details>
          <p>
            Pivot, Forward, Collapse is a single channel video of the breaking
            point of the human spirit and the analog video image. The video
            depicts a figure skater gliding through a backdrop of white video
            feedback. Through the manipulation of a VHS tape, the image of the
            skater crumples onto herself and eventually into nothingness. Lost
            in the blizzard of snowy white video feedback, this collapse
            represents the moment wherein one has fallen one too many times,
            where the lessons learned from mistakes do not change the outcome,
            and the temptation of giving up to the nothingness is far greater
            than a will to move forward. It is edited to be repurposed as a
            looping video, creating the cycle of pain anew.
          </p>
          <p>
            The piece was created through analog video machinery: a VCR and a
            video mixer running internal video feedback. The point of no return
            for the skater mirrors that of the VHS medium used. As the image of
            skater folds, there is increasingly little use for the VHS tape.
            It’s image quality corrupts and distorts, unable to compete with
            digital archiving and the vast superior quality of modern codecs.
            Once it collapses into the void, the medium is merely remembered as
            a relic of difficult times, at best a fetishized piece of nostalgia
            for those who never interacted with the medium itself.
          </p>

          <p>
            Under non-exclusive distribution with Vidéographe. For screening
            consideration please email info [at] bleunuitvideo [dot] com.
          </p>
        </Details>

        <PBold>SCREENINGS</PBold>
        <CreditLine>
          <BoldSpan>SATURATE(D) (early cut, installation)</BoldSpan>. Portland,
          OR (USA) . April/May 2018
        </CreditLine>
        <CreditLine>
          <BoldSpan>Correspondance/Correspondence (Vidéographe)</BoldSpan>.
          Montréal, QC (Canada) . Oct 2020
        </CreditLine>
        <CreditLine>
          <BoldSpan>Le Guess Who? (LGW ON)</BoldSpan> . Utrecht, Netherlands .
          Nov 2020
        </CreditLine>
      </LeftRow>
      <RightRow>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/249742442?h=dbdd8484d2"
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

export default PivotForwardCollapse;
