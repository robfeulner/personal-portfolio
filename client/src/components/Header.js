import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NameDiv>
          <StyledLink to="/">
            <H1>Rob Feulner</H1>
          </StyledLink>
        </NameDiv>
        <LinksDiv>
          <StyledLink to="/art-portfolio">
            <SpanLink>Art Portfolio</SpanLink>
          </StyledLink>
          <StyledLink to="/web-portfolio">
            <SpanLink>Web Portfolio</SpanLink>
          </StyledLink>
          <StyledLink>
            <SpanLink>Bio + Contact</SpanLink>
          </StyledLink>
          <StyledLink to="http://bleunuitvideo.com" target="_blank">
            <SpanLink>Bleu Nuit Video</SpanLink>
          </StyledLink>
        </LinksDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  align-items: center;
`;

const NameDiv = styled.div``;

const H1 = styled.h1`
  font-size: 5em;
  margin-right: 90px;
`;

const LinksDiv = styled.div`
  display: flex;
  gap: 50px;
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

export default Header;
