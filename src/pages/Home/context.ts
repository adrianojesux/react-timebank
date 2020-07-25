import { createContext } from "react";

interface ContextProps {
  openImportData: Function;
  cancelImportData: Function;
  showing: boolean;
}

const context = createContext<ContextProps>({
  openImportData: () => {},
  cancelImportData: () => {},
  showing: false,
});

export default context;
