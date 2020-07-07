import styled from "styled-components";

export const Container = styled.div`
  min-height: 40%;
  background-color: #ff304d;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const RowTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AppTitle = styled.h1`
  font-size: 18px;
  color: #fff;
`;

export const ButtonLink = styled.button`
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: none;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
`;

export const CardsArea = styled.div`
  flex: 1;
  padding: 0 30%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  margin: 16px 0;
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 150px;
  background: #fff;
  border-radius: 30px;
  margin: 16px;
`;
