import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const ImageModal = ({
  clickedImage,
  setClickedImage,
  handleRotationRight,
  handleRotationLeft,
}) => {
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
    <>
      <WrapperDismiss
        onClick={handleClick}
        className={`dismiss-class ${visible ? "fade-in" : ""}`}
      >
        <Img
          src={clickedImage}
          alt="TBD"
          className={visible ? "fade-in" : ""}
        />
        <Dismiss onClick={handleClick} className="dismiss-class">
          X
        </Dismiss>
        <DirectionWrapper>
          <OverlayLeft onClick={handleRotationLeft}>LEFT</OverlayLeft>
          <OverlayRight onClick={handleRotationRight}>RIGHT</OverlayRight>
        </DirectionWrapper>
      </WrapperDismiss>
    </>
  );
};

const WrapperDismiss = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
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
    margin: auto;
  }
`;

const Img = styled.img`
  display: block;
  max-width: 80%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

const Dismiss = styled.span`
  position: absolute;
  top: 50px;
  right: 20px;
  font-size: 5em;
  color: red;
  background-color: #000;
  z-index: 999;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &.dismiss-class {
  }
  @media screen and (max-width: 768px) {
    top: 30%;
  }
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  cursor: pointer;
`;

const OverlayLeft = styled.div`
  display: flex;
  background-color: #000;
  color: red;
  font-size: 5em;
  padding: 20px;
  border-radius: 10px;
  /* justify-content: space-between; */
  /* position: absolute; */
  top: 50%;
  /* width: 50px;
  height: 50px;
  left: 0; */
  z-index: 999;
  user-select: none;
  &:hover {
    color: white;
  }
`;

const OverlayRight = styled.div`
  display: flex;
  background-color: #000;
  color: red;
  font-size: 5em;
  /* justify-content: space-between; */
  /* position: absolute; */
  /* right: 0;
  width: 50px;
  height: 50px;
  top: 50%; */
  z-index: 999;
  user-select: none;
  padding: 20px;
  border-radius: 10px;
  &:hover {
    color: white;
  }
`;

export default ImageModal;
