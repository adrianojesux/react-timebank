import React from "react";
import TopPage from "./../../components/TopPage";
import Loading from "./../../components/Loading";

// import { Container } from './styles';

const Home: React.FC = () => {
  // return <TopPage />;
  return (
    <>
      <Loading />
      <TopPage />
    </>
  );
};

export default Home;
