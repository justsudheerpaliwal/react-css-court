import React from "react";
import ReactDOM from "react-dom";
import {
  CarouselContainer,
  ContentContainer,
  Card,
  ArrowContainer,
  RowContainer,
  Day,
  DayContainer
} from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./styled.css";

function App() {
  const highLightStart = 2;
  const highlightEnd = 8;
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <div className="blue red"> texjyhjyyt </div>
        <CarouselContainer className="App">
          <ArrowContainer>
            <i className="fas fa-angle-left" />
          </ArrowContainer>
          <ContentContainer>
            <Card>
              test dfadsf dfadsfs dsfadsf fdsafad dsfasdf dsfasdf fadsfasdf
            </Card>
            <Card> test</Card>
            <Card> test</Card>
            <Card> test</Card>
            <Card> test</Card>
          </ContentContainer>
          <ArrowContainer>
            <i className="fas fa-angle-right" />
          </ArrowContainer>
        </CarouselContainer>
        <RowContainer>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <DayContainer
              highlighted={num <= highlightEnd && num >= highLightStart}
            >
              <Day active={num === 3}>{num}</Day>
            </DayContainer>
          ))}
        </RowContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
