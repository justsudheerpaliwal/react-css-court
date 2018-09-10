import styled, { css } from "styled-components";
import { getColor } from "./theme";
export const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  background-color: ${getColor("primary")};
  padding: 2rem 0;
`;

export const ContentContainer = styled.div`
  flex: 0 0 70%;
  align-items: strech;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;
  justify-content: center;
  cursor: pointer;
  flex: 0 0 15%;
`;

export const Card = styled.div`
  background-color: ${getColor("secondary")};
  padding: 1rem;
  margin 0.5rem;
  flex: 1;
  box-shadow: 2px 2px 0.5rem rgba(0,0,0,0.4)});
`;

export const RowContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 2px 2px;
  flex-wrap: wrap;
`;

export const DayContainer = styled.div`
  ${props =>
    props.highlighted &&
    css`
      background-color: ${getColor("greenSecondary")};
    `} flex: 1;
`;

export const Day = styled.div`
  text-align: center;
  margin: 0px 4px;
  ${props =>
    props.active &&
    css`
      border: 1px solid ${getColor("greenPrimary")};
      border-radius: 2px;
    `};
  ${getColor("greenPrimary")};
  padding: 4px 4px;
  &:hover {
    border-radius: 2px;
    color: ${getColor("white")}
    background-color: ${getColor("greenPrimary")}
  }
`;
