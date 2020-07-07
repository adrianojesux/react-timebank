import { useEffect } from "react";
interface ImportPros {
  data: string;
}

function useImportCSV(param: ImportPros) {
  useEffect(() => {
    console.log("import data called");
  }, [param]);
}

export default { useImportCSV };
