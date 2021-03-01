import React, { useState } from "react";
import TopPage from "./../../components/TopPage";
import Loading from "./../../components/Loading";
import Input from "./../../components/Input";
import WithMask from "./../../components/HOC/withMask";
import ImportData from "./../../components/ImportData";
import { Container, Content } from "./styles";
import masks from "./../../utils/mask";
import HomeContext from "./context";
import { RowData } from "interfaces/rowData";

const InputMasked = WithMask(Input, masks.maskCPF);

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [shouldImport, setShouldImport] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>("0");
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

  function onImportData(data: RowData[]) {
    setShouldImport(false);
    console.log(data);

    const balancehrs = data
      .map((item) => item.hrs_realizadas)
      .reduce((ac, item) => sumHours(ac, item));

    setBalance(balancehrs);
  }

  function sumHours(hrs1: string, hrs2: string): string {
    if (!hrs2) return hrs1;

    const h1 = hrs1.split(":");
    const h2 = hrs2.split(":");

    let htotal = Number(h1[0]) + Number(h2[0]);
    let mtotal = Number(h1[1]) + Number(h2[1]);

    // console.log(h1, h2);
    if (mtotal > 60) {
      mtotal -= 60;
      htotal += 1;
    }
    console.log(htotal, ":", mtotal);
    if (!htotal && !mtotal) {
      debugger;
    }

    return `${htotal}:${mtotal}`;
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
        <TopPage
          hours_balance={balance}
          hours_performed={"0"}
          planned_hours={"0"}
        />
        <Content />
      </Container>
    </HomeContext.Provider>
  );
};

export default Home;
