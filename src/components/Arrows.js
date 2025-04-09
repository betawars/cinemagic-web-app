import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const ArrowLeft = styled(BsArrowLeftCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  opacity: ${({ hover }) => (hover === "true" ? "1" : "0")};
  transition: opacity 0.3s ease-in-out 0.1s;
`;

export const ArrowRight = styled(BsArrowRightCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
  right: 1rem;
  bottom: 4rem;
  z-index: 1;
  opacity: ${({ hover }) => (hover === "true" ? "1" : "0")};
  transition: opacity 0.3s ease-in-out 0.1s;
`;