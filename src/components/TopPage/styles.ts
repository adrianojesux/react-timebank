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

export const AppNameContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AppTitle = styled.h1`
  font-size: 18px;
  color: #fff;
  margin: 0 8px;
`;

export const ButtonLink = styled.button`
  width: 50px;
  height: 50px;
  font-size: 18px;
  color: #fff;
  background: #e30020;
  border: none;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  position: relative;

  &:hover {
    background: #32cd32;
  }

  &:after {
    content: "";
  }
`;

export const CardsArea = styled.div`
  flex: 1;
  /* padding: 0 30%; */
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
  /* border-radius: 10px; */
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  border-bottom: solid 1px #f6f6f6;

  h2 {
    font-size: 16px;
    color: #666;
    margin: 8px;
  }
`;
export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 74px;
    color: #666;
    margin: 8px;

    &.positive {
      color: #32cd32 !important;
    }

    &.negative {
      color: #cd0022 !important;
    }
  }
`;
