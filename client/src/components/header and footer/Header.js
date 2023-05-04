import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsVimeo } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NameDiv>
          <StyledLink to="/">
            <H1>Rob Feulner</H1>
          </StyledLink>
        </NameDiv>
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
        <ImgDiv>
          <Img
            src="/images/vhsguy-header-05.png"
            alt="VHS Guy by Jennifer Brunet"
          />
        </ImgDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
  align-items: flex-end;
  margin-bottom: 5%;
  gap: 5%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40%;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
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
    width: 25%;
    order: 1;
  }
`;

const H1 = styled.h1`
  font-size: 5em;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 3em;
    margin: 0;
  }
`;

const TextAndIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    width: -100%;
    margin-top: 70%;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    order: 3;
  }
`;

const LinksDiv = styled.div`
  display: flex;

  /* margin-bottom: 20px; */
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    /* align-items: center; */
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
`;

const ImgDiv = styled.div`
  margin: 0;
  @media screen and (max-width: 768px) {
    width: 25%;
    order: 2;
  }
`;

const Img = styled.img`
  height: 10em;
  margin: 0;
`;

export default Header;
