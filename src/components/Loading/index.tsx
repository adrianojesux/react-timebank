import React, { forwardRef, useImperativeHandle } from "react";

import { Container, SpinnerContent } from "./styles";

interface LoaginProps {
  isShowing?: boolean;
}

const Loading: React.FC<LoaginProps> = forwardRef(({ isShowing }, ref) => {
  const showAlert = (): void => {
    alert("OK Google...");
  };

  useImperativeHandle(ref, () => {
    showAlert;
  });

  if (isShowing)
    return (
      <Container>
        <SpinnerContent>
          <h1>Carregando...</h1>
        </SpinnerContent>
      </Container>
    );

  return <></>;
});

export default Loading;
