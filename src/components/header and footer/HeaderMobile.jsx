import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsVimeo } from "react-icons/bs";

function HeaderMobile() {
  return (
    <Wrapper>
      <TopRow>
        <NameDiv>
          <StyledLink to="/">
            <H1>Rob Feulner</H1>
          </StyledLink>
        </NameDiv>
        <ImgDiv>
          <Img
            src="/images/vhsguy-header-05.png"
            alt="VHS Guy by Jennifer Brunet"
          />
        </ImgDiv>
      </TopRow>
      <TextAndIconsDiv>
        <IconsDiv>
          <StyledLink to="http://instagram.com/bleunuitvideo" target="_blank">
            <AiOutlineInstagram />
          </StyledLink>{" "}
          <StyledLink to="https://vimeo.com/robfeulner" target="_blank">
            <BsVimeo />
          </StyledLink>
          <StyledLink to="https://github.com/robfeulner" target="_blank">
            <AiOutlineGithub />
          </StyledLink>
        </IconsDiv>
        <LinksDiv>
          <StyledLink to="/art-portfolio">
            <SpanLink>Art Portfolio</SpanLink>
          </StyledLink>
          <StyledLink to="/web-portfolio">
            <SpanLink>Web Portfolio</SpanLink>
          </StyledLink>
          <StyledLink to="/bio">
            <SpanLink>Bio + Contact</SpanLink>
          </StyledLink>
          <StyledLink to="http://bleunuitvideo.com" target="_blank">
            <SpanLink>Bleu Nuit Video</SpanLink>
          </StyledLink>
        </LinksDiv>
      </TextAndIconsDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
  align-items: flex-end;
  margin-bottom: 5%;
  gap: 5%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: stretch;
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20%;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
`;

const NameDiv = styled.div`
  background-image: url("/images/vhsguy-header-04.png");
  background-size: contain;
  &:hover {
    background-image: url("/images/vhsguy-header-03.png");
    background-size: contain;
  }
  /* transition: all 0.3s ease-in-out; */
  /* gap: 2vh; */
  @media screen and (max-width: 768px) {
    background: none;
    width: auto;
    max-width: 70%;
  }
`;

const H1 = styled.h1`
  font-size: 5em;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: clamp(1.75rem, 8vw, 2.5rem);
    margin: 0;
    line-height: 1;
  }
`;

const TextAndIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const LinksDiv = styled.div`
  display: flex;

  /* margin-bottom: 20px; */
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.75rem;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2em;
  gap: 10%;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    gap: 0.75rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: red;
  }
  &:active {
    text-decoration: dashed;
  }
  transition: all 0.3s ease-in-out;
`;

const SpanLink = styled.span`
  font-size: 1.25em;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImgDiv = styled.div`
  margin: 0;
  @media screen and (max-width: 768px) {
    width: auto;
    flex-shrink: 0;
  }
`;

const Img = styled.img`
  height: 10em;
  margin: 0;

  @media screen and (max-width: 768px) {
    height: auto;
    width: clamp(72px, 22vw, 110px);
    max-width: 100%;
    display: block;
  }
`;

export default HeaderMobile;
