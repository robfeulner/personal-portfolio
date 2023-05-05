import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonalPortfolio from "./PersonalPortfolio";
import Suoni from "./Suoni";
import SportsSavvy from "./SportsSavvy";

const WebPortfolio = () => {
  const [site, setSite] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handlePortfolio = (event) => {
    setSite("portfolio");
  };

  const handleSuoni = (event) => {
    setSite("suoni");
  };

  const handleSportsSavvy = (event) => {
    setSite("sportssavvy");
  };

  const handleSlingAir = (event) => {
    setSite("slingair");
  };

  const handleFalse = (event) => {
    setSite(false);
  };

  return (
    <>
      <Wrapper className={visible ? "fade-in" : ""}>
        <LeftColumn>
          <H1 onClick={handleFalse}>WEB PORTFOLIO</H1>
          <LinkDiv>
            <H2 onClick={handlePortfolio}>Personal Portfolio</H2>
            <H2 onClick={handleSuoni}>Suoni Per Il Popolo Archive</H2>
            <H2 onClick={handleSportsSavvy}>Faux e-Commerce Website</H2>
          </LinkDiv>
        </LeftColumn>
        <RightColumn>
          {!site && (
            <Img
              src="/images/vhsguy-ufo-01.png"
              alt='"VHS UFO Guy" by Jennifer Brunet'
            />
          )}
          {site === "portfolio" && <PersonalPortfolio />}
          {site === "suoni" && <Suoni />}
          {site === "sportssavvy" && <SportsSavvy />}
        </RightColumn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    gap: 10%;
    flex-direction: column;
    flex-wrap: wrap; /* add this line */
    justify-content: space-between; /* add this line */
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    min-width: 80%;
    gap: 5%;
    align-items: center;
    justify-content: flex-start;
  }
`;

const H1 = styled.h1`
  font-size: 3em;
  margin-top: 1.7em;
  transform: scale(1, 3);
  -webkit-transform: scale(1, 3);
  -moz-transform: scale(1, 3);
  -o-transform: scale(1, 3);
  transform-origin: 0% 70%;
  @media screen and (max-width: 768px) {
    font-size: 2.5em;
    margin: 0;
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
    transform-origin: none;
  }
`;

const LinkDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 10%;
  }
`;

const H2 = styled.h2`
  &:hover {
    color: red;
  }
  &:active {
    color: darkred;
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 28%;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 50%;
  margin-left: 30%;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export default WebPortfolio;
