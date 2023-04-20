import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NameDiv>
          <H1>Rob Feulner</H1>
        </NameDiv>
        <LinksDiv>
<SpanLink>Home</SpanLink>
<SpanLink>Art Portfolio</SpanLink>
<SpanLink>Web Portfolio</SpanLink>
<SpanLink>Bio + Contact</SpanLink>
<SpanLink>Bleu Nuit Video</SpanLink>
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
`

const LinksDiv = styled.div`
display: flex;
gap: 50px;
`

const SpanLink = styled.span`
font-size: 1.25em;
`

export default Header;
