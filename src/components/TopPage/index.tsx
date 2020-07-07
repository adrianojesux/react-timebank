import React from "react";

import {
  Container,
  AppTitle,
  RowTop,
  ButtonLink,
  CardsArea,
  CardContainer,
} from "./styles";

const TopPage: React.FC<any> = () => {
  return (
    <Container>
      <RowTop>
        <AppTitle>Timebanking</AppTitle>
        <ButtonLink>Importar dados</ButtonLink>
      </RowTop>
      <CardsArea>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
      </CardsArea>
    </Container>
  );
};

export default TopPage;
