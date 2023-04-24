import styled from "styled-components";

const SportsSavvy = () => {
  return (
    <>
      <h1>SportsSavvy</h1>
      <h2>e-Commerce Group Project</h2>
      <Img src="images/web-portfolio/sportssavvy02.png" alt="Sports Savvy" />

      <h2>View the GitHub repo</h2>
      <p>
        Developed as a group project for the Full Stack Web Development bootcamp
        at Concordia University, SportsSavvy is an e-Commerce smart watch
        website created with MERN (MongoDB, Express, React, and Node.) Hundreds
        of items are stored on a private server, along with user data and
        purchase history. Though completing an order won't result in actually
        receiving a smart watch in the mail, it holds nearly all the
        funcionality involved in online shopping.
      </p>
      <Img2 src="images/web-portfolio/sportssavvy03.png" alt="Sports Savvy" />
      <p>Handlers, handlers, handlers</p>
      <p>
        We had split the teams in two, with myself and a colleague focusing on
        the frontend and logic, and the other two team members focusing on the
        backend, though we found ourselves helping with all aspects. The website
        design was first sketched using Figma and daily tasks and updates were
        tracked using a shared sheet and task software.
      </p>
      <p>For a more illustrative description, please watch my presentation video below!</p>

    </>
  );
};

const Img = styled.img`
width: 70%;
`

const Img2 = styled.img`
height: 30%;
`

export default SportsSavvy;
