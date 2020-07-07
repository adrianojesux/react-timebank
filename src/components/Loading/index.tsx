import React from "react";

import { Container, SpinnerContent } from "./styles";

interface LoaginProps {
  isShowing?: boolean;
}

const Loading: React.FC<LoaginProps> = ({ isShowing }) => {
  if (isShowing)
    return (
      <Container>
        <SpinnerContent>
          <h1>Carregando...</h1>
        </SpinnerContent>
      </Container>
    );

  return <></>;
};

export default Loading;
