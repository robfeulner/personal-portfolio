import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PersonalPortfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Wrapper className={visible ? 'fade-in' : ''}>
      <h1>Personal Portfolio</h1>
      <p>
        This is the very site you're visiting now! No YouTube or tour needed,
        just click around.
      </p>
      <p>
        My personal portfolio was created from scratch with a combination of
        React, CSS, and JavaScript functions. Nothing too fancy, just easy to
        navigate and functional.
      </p>
      <p>"VHS Guy" illustrations by Jennifer Brunet.</p>
      <StyledLink
        to="https://github.com/robfeulner/personal-portfolio"
        target="_blank"
      >
        <H2>View the GitHub repo, steal all my secrets.</H2>
      </StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
  @media screen and (max-width: 768px){
    width: 80vh;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
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
`;

export default PersonalPortfolio;
