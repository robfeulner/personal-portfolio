import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SportsSavvy() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? "fade-in" : ""}>
      <h1>SportsSavvy</h1>
      <h2>e-Commerce Group Project</h2>
      <Img src="images/web-portfolio/sportssavvy02.png" alt="Sports Savvy" />
      <StyledLink
        to="https://github.com/robfeulner/project-GROUP-e-commerce"
        target="_blank"
      >
        <H2>View the GitHub repo</H2>
      </StyledLink>
      <p>
        Developed as a group project for the Full Stack Web Development
        bootcamp at Concordia University, SportsSavvy is an e-Commerce smart
        watch website created with MERN (MongoDB, Express, React, and Node.)
        Hundreds of items are stored on a private server, along with user data
        and purchase history. Though completing an order won't result in
        actually receiving a smart watch in the mail, it holds nearly all the
        funcionality involved in online shopping.
      </p>
      <Img2 src="images/web-portfolio/sportssavvy03.png" alt="Sports Savvy" />
      <PSmall>Handlers, handlers, handlers</PSmall>
      <p>
        We had split the teams in two, with myself and a colleague focusing on
        the frontend and logic, and the other two team members focusing on the
        backend, though we found ourselves helping with all aspects. The
        website design was first sketched using Figma and daily tasks and
        updates were tracked using a shared sheet and task software.
      </p>
      <p>
        For a more illustrative description, please watch my presentation
        video below!
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zUm3yX_joK4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
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

const Img = styled.img`
  width: 70%;
`;

const Img2 = styled.img`
  height: 70%;
  margin-bottom: 0;
  @media screen and (max-width: 768px){
    height: 20em;
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

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

const PSmall = styled.p`
  font-size: 0.7em;
  font-style: italic;
  margin-top: 2px;
`;

export default SportsSavvy;
