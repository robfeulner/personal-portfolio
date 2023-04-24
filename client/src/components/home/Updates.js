import styled from "styled-components";

const Updates = () => {
  return (
    <>
      <Wrapper>
        <Title>LATEST UPDATES</Title>
        <P>April 19th, 2023</P>
        <P>
          THE DIABETIC, a feature-length film by Mitchell Stafiej, is now
          available for free streaming on Tubi. I created visual effects seen
          during the opening segment, and collaborated with Mitchell for the
          original score under the project name FUCKERS. It's a wild film, a
          must for fans of The Comedy, Good Time, and lo-fi mayhem.
        </P>
        <P>Read more...</P>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: left;
`;

const P = styled.p`
  font-size: 1.25em;
  margin-top: -5px;
`;

export default Updates;
