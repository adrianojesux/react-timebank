import React, { useContext } from "react";
import {
  MdHistory,
  MdDoneAll,
  MdImportExport,
  MdPublish,
  MdClose,
} from "react-icons/md";

import HomeContext from "./../../pages/Home/context";

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

interface TopPageProps {
  planned_hours: string;
  hours_performed: string;
  hours_balance: string;
}

const TopPage: React.FC<TopPageProps> = ({
  planned_hours,
  hours_balance,
  hours_performed,
}) => {
  const { openImportData, cancelImportData, showing } = useContext(HomeContext);

  return (
    <Container>
      <RowTop>
        <AppNameContent>
          <MdHistory size="2em" color="#fff" />
          <AppTitle>Timebanking</AppTitle>
        </AppNameContent>
        {showing ? (
          <ButtonLink onClick={() => cancelImportData()}>
            <MdClose size="18px" color="#f6f6f6" />
          </ButtonLink>
        ) : (
          <ButtonLink onClick={() => openImportData()}>
            <MdPublish size="18px" color="#f6f6f6" />
          </ButtonLink>
        )}
      </RowTop>
      <CardsArea>
        <CardContainer>
          <CardTitle>
            <MdDoneAll size="24px" color="#ff8c00" />
            <h2>Horas Planejadas</h2>
          </CardTitle>
          <CardContent>
            <h1>{planned_hours}</h1>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardTitle>
            <MdImportExport size="24px" color="#32cd32" />
            <h2>Horas Realizadas</h2>
          </CardTitle>
          <CardContent>
            <h1>{hours_performed}</h1>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardTitle>
            <MdDoneAll size="24px" color="#32cd32" />
            <h2>Saldo Total</h2>
          </CardTitle>
          <CardContent>
            <h1 className="negative">{hours_balance}</h1>
          </CardContent>
        </CardContainer>
      </CardsArea>
    </Container>
  );
};

export default TopPage;
