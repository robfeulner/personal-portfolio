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

  align-items: center;
  /* justify-content: space-between; */
  align-items: flex-end;
  margin-bottom: 5%;
  gap: 5%;
`;

const NameDiv = styled.div`
  background-image: url("/images/vhsguy-header-04.png");
  background-size: contain;
  &:hover {
    background-image: url("/images/vhsguy-header-03.png");
    background-size: contain;
  }
  /* transition: all 0.3s ease-in-out; */
`;

const H1 = styled.h1`
  font-size: 5em;
  margin: 0;
`;

const TextAndIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 15px;
`;

const LinksDiv = styled.div`
  display: flex;
  gap: 10px;
  /* margin-bottom: 20px; */
  justify-content: space-between;
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2em;
  gap: 50px;
  justify-content: flex-end;
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

const ImgDiv = styled.div``;

const Img = styled.img`
  height: 150px;
  margin: 0;
`;

export default Header;
