import React, { useState } from "react";
import TopPage from "./../../components/TopPage";
import Loading from "./../../components/Loading";
import Input from "./../../components/Input";
import WithMask from "./../../components/HOC/withMask";
import ImportData from "./../../components/ImportData";
import { Container, Content } from "./styles";
import masks from "./../../utils/mask";
import HomeContext from "./context";

const InputMaked = WithMask(Input, masks.maskCPF);

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [shouldImport, setShouldImport] = useState<boolean>(false);
  const handleChange = (formatedValue: string) => {
    setValue(formatedValue);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {};

  function openImportData() {
    setShouldImport(true);
  }

  function onCancelImportData() {
    setShouldImport(false);
  }

  function onImportData(data: any[]) {
    console.log(data);
  }

  // return <TopPage />;
  return (
    <HomeContext.Provider
      value={{
        openImportData: openImportData,
        cancelImportData: onCancelImportData,
        showing: shouldImport,
      }}
    >
      <Container>
        <ImportData shouldImport={shouldImport} onImport={onImportData} />
        <Loading />
        <TopPage />
        <Content />
      </Container>
    </HomeContext.Provider>
  );
};

export default Home;
