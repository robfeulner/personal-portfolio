import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArtPortfolio() {
  const [hoverArt, setHoverArt] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const images = [
    {
      src: '/images/art-portfolio/unstable-still-01-450.jpg',
      alt: 'Unstable Intermediated Forms',
      hoverSrc: '/images/art-portfolio/unstable-gif-01-450.gif',
      title: 'Unstable Intermediated Forms',
      description: 'Installation, 2021',
      length: 'TOPO Gallery, Montréal',
    },
    {
      src: '/images/art-portfolio/cablebox-still-01-450.jpg',
      alt: 'Cable Box',
      hoverSrc: '/images/art-portfolio/cablebox-gif-01-450.gif',
      title: 'Cable Box',
      description: 'Video, 2020',
      length: '16min, 45sec',
      link: '/art-portfolio/cable-box',
    },
    {
      src: '/images/art-portfolio/pivot-still-01-450.jpg',
      alt: 'Pivot, Forward, Collapse',
      hoverSrc: '/images/art-portfolio/pivot-gif-01-450.gif',
      title: 'Pivot, Forward, Collapse',
      description: 'Video / Installation, 2020',
      length: '2min 51sec',
      link: '/art-portfolio/pivot-forward-collapse',
    },
    {
      src: '/images/art-portfolio/carmen-still-01-450.jpg',
      alt: 'Carmen',
      hoverSrc: '/images/art-portfolio/carmen-gif-01-450.gif',
      title: 'Carmen',
      description: 'Home Video Release / Performance, 2018/2020',
      length: '14min, 52sec',
      link: '/art-portfolio/carmen',
    },
    {
      src: '/images/art-portfolio/noban-still-01-450.jpg',
      alt: 'NO BAN',
      hoverSrc: '/images/art-portfolio/noban-gif-01-450.gif',
      title: 'NO BAN',
      description: 'Video, 2017',
      length: '4min 49sec',
    },
    {
      src: '/images/art-portfolio/adultswim-still-01-450.jpg',
      alt: 'Off the Air 5x04: Analog Video Remix',
      hoverSrc: '/images/art-portfolio/adultswim-gif-01-450.gif',
      description: 'Television / Web Broadcast, 2018',
      length: '11min 51sec',
      link: '/art-portfolio/off-the-air',
    },
    {
      src: '/images/art-portfolio/videoart-still-01-450.jpg',
      alt: 'Video Art for Conditional Malaise',
      hoverSrc: '/images/art-portfolio/videoart-gif-01-450.gif',
      description: 'Performance / Home Video Release / Installation, 2017',
      length: '29min 04sec',
      link: '/art-portfolio/video-art',
    },

    {
      src: '/images/art-portfolio/burningdesire-still-01-450.jpg',
      alt: 'The Burning Desire in a Dollar Bill',
      hoverSrc: '/images/art-portfolio/burningdesire-gif-01-450.gif',
      description: 'Video, 2017',
      length: '5min 06sec',
      link: '/art-portfolio/burning-desire',
    },
    {
      src: '/images/art-portfolio/expo67-still-01-450.jpg',
      alt: 'Man and His Progress',
      hoverSrc: '/images/art-portfolio/expo67-gif-01-450.gif',
      description: 'Installation, 2017',
      length: 'Eastern Bloc, Montréal',
      link: '/art-portfolio/man-and-his-progress',
    },
    {
      src: '/images/art-portfolio/prtautology-still-01-450.jpg',
      alt: 'Puerto Rico Tautology (14 dubs high)',
      hoverSrc: '/images/art-portfolio/prtautology-gif-01-450.gif',
      description: 'Video, 2016',
      length: '6min 59sec',
      link: '/art-portfolio/puerto-rico-tautology',
    },
    {
      src: '/images/art-portfolio/garfield-still-01-450.jpg',
      alt: 'ǝɹnʇuǝʌp∀ uǝǝʍollɐH s,plǝᴉɟɹɐפ',
      hoverSrc: '/images/art-portfolio/garfield-gif-01-450.gif',
      description: 'Home Video Release, 2015',
      length: '24min 52sec',
    },
  ];

  return (
    <Wrapper className={visible ? 'fade-in' : ''}>
      {images.map((image, index) => (
        <ArtDiv
          key={index}
          onMouseOver={() => setHoverArt(index)}
          onMouseOut={() => setHoverArt(-1)}
        >
          <Link to={image.link}>
            <Img
              src={index === hoverArt ? image.hoverSrc : image.src}
              alt={image.alt}
            />
          </Link>
          <StyledLink to={image.link}>
            <TextDiv>
              <H2>{image.alt}</H2>
              <P>{image.description}</P>
              <P>{image.length}</P>
            </TextDiv>
          </StyledLink>
        </ArtDiv>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  gap: 40px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    width: 80vh;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

const ArtDiv = styled.div`
  flex: 1 1 auto;
  max-width: 25%;
  margin: 0 0 20px 0px;
  img {
    transition: transform 0.5s;
  }

  &:hover img {
    transform: zoom(1.1);
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex: auto;
    margin: auto;
  }
`;

const Img = styled.img`
  border-radius: 5%;
  @media screen and (max-width: 768px) {
    width: 120%;
  }
`;

const TextDiv = styled.div`
  /* width: 60%; */
`;

const H2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 0 0;
`;

const P = styled.p`
  font-size: 1.25em;
  margin: 0px 0 5px 0;
`;

export default ArtPortfolio;
