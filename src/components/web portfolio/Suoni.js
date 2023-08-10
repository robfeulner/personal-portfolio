import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function Suoni() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? 'fade-in' : ''}>
      <h1>Suoni Per Il Popolo Archive</h1>
      <Img
        src="images/web-portfolio/suoni-site.jpg"
        alt="Suoni Per Il Popolo Archive"
      />
      <StyledLink
        to="https://suoni-archive-9oam-git-main-robfeulner-s-team.vercel.app/"
        target="_blank"
      >
        <H2>Visit the site</H2>
      </StyledLink>
      <StyledLink
        to="https://github.com/robfeulner/suoni-archive"
        target="_blank"
      >
        <H2>View the GitHub repo</H2>
      </StyledLink>
      <p>
        Located in Montreal, Quebec, Suoni Per Il Popolo has been a leading
        festival of the avant-garde arts since the year 2000. Every June the
        festival showcases underground experimental performers from genres
        such as free jazz, noise, drone, avant-folk, art-rock, electronics,
        and more.
      </p>

      <p>
        I noticed that the official Suoni website has an archive going back to
        2021, but all the events for the 21 years prior remain a mystery. As
        such, I created a searchable database of all performers and events for
        the Suoni Per Il Popolo festival. The data has been manually entered
        through old festival programmes, and I will continue to update the
        site as more programmes and data sets become available to me.
      </p>

      <p>
        The website was created using MERN (MongoDB, Express, React, Node). A
        couple of APIs were used: Auth0 to log in to leave comments, and
        TinyMCE for an interactive rich-text editor.
      </p>

      <p>
        You can view the list of artists and events by Year, Venue, or Artist
        Name. There's also a search bar that will return a query of artist
        names. I invite you to leave comments on the event page, such as
        memories from the event, set lists, posters, photos, video links, etc.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    width: 80vh;
  }
`;

const Img = styled.img`
  width: 70%;
  border-radius: 10px;
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

export default Suoni;
