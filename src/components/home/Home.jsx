import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Updates from "./Updates";
import BioDiv from "../bio/BioDiv";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Wrapper className={visible ? "fade-in" : ""}>
      <BioDiv />
      <SecondRow>
        <ImgPress src="/images/robfeulner_press08-1200.jpg" alt="Rob Feulner" />
        <Updates />
      </SecondRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  &.fade-in {
    opacity: 1;
  }
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    margin-top: 15%;
    flex-direction: column;
    width: 175vw;
  }
`;

const ImgPress = styled.img`
  max-width: 50%;
  margin-right: 5%;
  gap: 2vh;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: auto;
  }
`;

export default Home;
