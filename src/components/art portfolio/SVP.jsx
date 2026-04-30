import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVPCheapThrills from "./SVPCheapThrills";
import SVPHorrorFanatik from "./SVPHorrorFanatik";
import SVPFilmFanatik from "./SVPFilmFanatik";
import SVPMelies from "./SVPMelies";
import SVPCentreVille from "./SVPCentreVille";
import SVPCinoche from "./SVPCinoche";

const SVP = () => {
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleRob = (event) => {
    setLocation("BioDiv");
  };

  const handleSam = (event) => {
    setLocation("SamBio");
  };

  const handleCheapThrills = (event) => {
    setLocation("CheapThrills");
  };

  const handleHorrorFanatik = (event) => {
    setLocation("HorrorFanatik");
  };

  const handleFilmFanatik = (event) => {
    setLocation("FilmFanatik");
  };

  const handleMelies = (event) => {
    setLocation("Melies");
  };

  const handleCentreVille = (event) => {
    setLocation("CentreVille");
  };

  const handleCinoche = (event) => {
    setLocation("Cinoche");
  };

  return (
    <Wrapper className={visible ? "fade-in" : ""}>
      <TopWrapper>
        <LeftRow>
          <H1>SVP REMBOBINEZ</H1>
          <Info>
            <PBold>Exhibition . 2024 . Quebec</PBold>
            <PBold>Funded by CALQ</PBold>
          </Info>
          <Details>
            <p>
              SVP Rembobinez is a series of interactive analogue video
              installations set within current and former video stores in the
              province of Québec. The work explores Rob Feulner and Sam Meech's
              fascination with VHS and DVD video formats and the creative
              possibilities of the analogue video signal.
            </p>

            <p>
              The exhibition builds on Meech & Feulner's experimental video
              installation 'Unstable Intermediated Forms' , presented in the
              vitrine of Agence TOPO in November 2021, Montreal. The
              installation re-presented existing works coupled together in a
              volatile feedback system - affecting each other through live video
              mixing, interactive camera tracking, and signal switching.
            </p>

            <p>
              SVP Rembobinez is a sequel of sorts. Some works have detached from
              their partnership, other new collaborations were born. All of
              which have a relationship to a medium or environment, whether it
              be the video format itself, genres that attach us to such formats,
              or the act of watching said formats. Their inclusion in video
              stores new and old are celebrations of the communities that bring
              all these ideas together.
            </p>

            <p>
              There are many works that were created alone by Sam Meech.{" "}
              <a
                href="https://sites.google.com/view/svprembobinez/home?authuser=0"
                target="_blank"
              >
                These are documented on the SVP Rembobinez website
              </a>
              , which I invite you to visit.
            </p>
          </Details>
        </LeftRow>
        <RightRow>
          <Link to="/images/art-portfolio/svp/SVP-poster-1200.jpg">
            <Img
              src="/images/art-portfolio/svp/SVP-poster-1200.jpg"
              alt="SVP Rembobinez"
            />
          </Link>
        </RightRow>
      </TopWrapper>
      <BottomWrapper>
        <LeftRow>
          <OptionHeader>Location & Artworks</OptionHeader>
          <H2Option onClick={handleCheapThrills}>Cheap Thrills</H2Option>
          <H2Option onClick={handleHorrorFanatik}>Horror Fanatik</H2Option>
          <H2Option onClick={handleFilmFanatik}>Film Fanatik</H2Option>
          <H2Option onClick={handleMelies}>Cinémathèque Méliès</H2Option>
          <H2Option onClick={handleCentreVille}>Video Centre Ville</H2Option>
          <H2Option onClick={handleCinoche}>Le Cinoche</H2Option>
        </LeftRow>
        <RightRow>
          <SiteWrapper>
            {location === "CheapThrills" && <SVPCheapThrills />}
            {location === "HorrorFanatik" && <SVPHorrorFanatik />}
            {location === "FilmFanatik" && <SVPFilmFanatik />}
            {location === "Melies" && <SVPMelies />}
            {location === "CentreVille" && <SVPCentreVille />}
            {location === "Cinoche" && <SVPCinoche />}
          </SiteWrapper>
        </RightRow>
      </BottomWrapper>
    </Wrapper>
  );
};

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 5%;
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

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 4%;
`;

const Info = styled.div`
  margin-top: 5px;
  /* margin-bottom: 15px; */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
`;

const H1 = styled.h1`
  font-size: 5em;
  margin-top: 2em;
  margin-bottom: 0.5em;

  transform: scale(1.5, 4);
  -webkit-transform: scale(1.5, 4) skewX(-5deg) skewY(1deg);
  -moz-transform: scale(1.5, 4);
  -o-transform: scale(1.5, 4);
  transform-origin: 0% 90%;
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

const Img = styled.img`
  width: 600px;
`;

const OptionHeader = styled.h2`
  font-size: 2em;
  margin-top: 0;
`;

const H2Option = styled.h2`
  font-size: 2em;
  color: red;
  margin: 5px 0 5px 0;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

export default SVP;
