import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ImageModal({
  clickedImage,
  setClickedImage,
  handleRotationRight,
  handleRotationLeft,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = (event) => {
    if (event.target.classList.contains("dismiss-class")) {
      setClickedImage(null);
    }
  };

  return (
    <WrapperDismiss
      onClick={handleClick}
      className={`dismiss-class ${visible ? "fade-in" : ""}`}
    >
      <Img src={clickedImage} alt="TBD" className={visible ? "fade-in" : ""} />
      <Dismiss onClick={handleClick} className="dismiss-class">
        X
      </Dismiss>
      <DirectionWrapper>
        <OverlayLeft onClick={handleRotationLeft}>LEFT</OverlayLeft>
        <OverlayRight onClick={handleRotationRight}>RIGHT</OverlayRight>
      </DirectionWrapper>
    </WrapperDismiss>
  );
}

const WrapperDismiss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 96px 24px 24px;
  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-in {
    opacity: 1;
  }

  &.dismiss-class {
    /* add styles to your WrapperDismiss component */
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const Img = styled.img`
  display: block;
  width: min(100%, calc(100vw - 160px));
  max-width: 1200px;
  max-height: calc(100vh - 48px);
  margin: 0;
  object-fit: contain;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
    width: calc(100vw - 32px);
    max-width: 100%;
    max-height: calc(100vh - 180px);
  }
`;

const Dismiss = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: clamp(1.6rem, 3vw, 3rem);
  line-height: 1;
  color: red;
  background-color: #000;
  z-index: 999;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &.dismiss-class {
  }
  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    right: auto;
    left: 50%;
    top: auto;
    bottom: 16px;
    transform: translateX(-50%);
  }
`;

const OverlayLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: red;
  font-size: clamp(1.1rem, 2.2vw, 2rem);
  padding: 12px 16px;
  min-width: 90px;
  border-radius: 10px;
  z-index: 999;
  user-select: none;
  &:hover {
    color: white;
  }
`;

const OverlayRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: red;
  font-size: clamp(1.1rem, 2.2vw, 2rem);
  min-width: 90px;
  z-index: 999;
  user-select: none;
  padding: 12px 16px;
  border-radius: 10px;
  &:hover {
    color: white;
  }
`;

export default ImageModal;
