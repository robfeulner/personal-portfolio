import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Updates from "./Updates";
import BioDiv from "../bio/BioDiv";

function Home() {
  const [visible, setVisible] = useState(false);
  const [isMobileTablet, setIsMobileTablet] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const onViewportChange = (event) => setIsMobileTablet(event.matches);

    setIsMobileTablet(mediaQuery.matches);
    mediaQuery.addEventListener("change", onViewportChange);

    return () => mediaQuery.removeEventListener("change", onViewportChange);
  }, []);

  return (
    <Wrapper className={visible ? "fade-in" : ""}>
      {isMobileTablet ? (
        <MobileTabletLayout>
          <ImgPress src="/images/robfeulner_press08-1200.jpg" alt="Rob Feulner" />
          <BioDiv />
          <Updates />
        </MobileTabletLayout>
      ) : (
        <>
          <BioDiv />
          <SecondRow>
            <ImgPress src="/images/robfeulner_press08-1200.jpg" alt="Rob Feulner" />
            <Updates />
          </SecondRow>
        </>
      )}
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

const MobileTabletLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5vh;
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  gap: 2vh;
`;

const ImgPress = styled.img`
  width: min(100%, 720px);
  margin-right: 5%;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`;

export default Home;
