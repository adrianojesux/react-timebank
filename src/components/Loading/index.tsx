import React from "react";

import { Container, SpinnerContent } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <SpinnerContent>
        <h1>Carregando...</h1>
      </SpinnerContent>
    </Container>
  );
};

export default Loading;
