import React from "react";
import {
  MdHistory,
  MdDoneAll,
  MdImportExport,
  MdPublish,
} from "react-icons/md";

import {
  Container,
  AppTitle,
  RowTop,
  ButtonLink,
  CardsArea,
  AppNameContent,
  CardContainer,
  CardContent,
  CardTitle,
} from "./styles";

const TopPage: React.FC<any> = () => {
  return (
    <Container>
      <RowTop>
        <AppNameContent>
          <MdHistory size="2em" color="#fff" />
          <AppTitle>Timebanking</AppTitle>
        </AppNameContent>
        <ButtonLink>
          <MdPublish size="18px" color="#f6f6f6" />
        </ButtonLink>
      </RowTop>
      <CardsArea>
        <CardContainer>
          <CardTitle>
            <MdDoneAll size="24px" color="#ff8c00" />
            <h2>Horas Planejadas</h2>
          </CardTitle>
          <CardContent>
            <h1>250</h1>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardTitle>
            <MdImportExport size="24px" color="#32cd32" />
            <h2>Horas Realizadas</h2>
          </CardTitle>
          <CardContent>
            <h1>200</h1>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardTitle>
            <MdDoneAll size="24px" color="#32cd32" />
            <h2>Saldo Total</h2>
          </CardTitle>
          <CardContent>
            <h1 className="negative">-50</h1>
          </CardContent>
        </CardContainer>
      </CardsArea>
    </Container>
  );
};

export default TopPage;
