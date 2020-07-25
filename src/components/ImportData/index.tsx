import React, { useCallback, useMemo } from "react";

import { useDropzone } from "react-dropzone";

import { Container, BoxInputData, UploadMessage, DropArea } from "./styles";

import { MdPublish } from "react-icons/md";

interface ImportDataProps {
  shouldImport?: boolean;
}

const ImportData: React.FC<ImportDataProps> = ({ shouldImport }) => {
  const onDrop = useCallback((acceptFiles) => {
    console.log(acceptFiles);
    acceptFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onerror = () => {
        console.error("Falha na leitura do arquivo.");
      };

      reader.onload = () => {
        const readed = reader.result;
        console.log(readed);
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);

  const {
    getInputProps,
    getRootProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
  });

  const showMessage = useMemo(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste a sua planilha de horas...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  if (!shouldImport) return <React.Fragment></React.Fragment>;

  return (
    <Container>
      <BoxInputData>
        <div className="box-title">
          <h1>Importar Dados (CSV)</h1>
          <MdPublish size="18px" color="#666" />
        </div>
        <div className="box-body">
          <span>
            Arraste e solte o arquivo .CSV para área a abaixo. Você também pode
            clicar e busca-lo nos seus arquivos.
          </span>
          <DropArea {...getRootProps()}>
            <input {...getInputProps()} />
            {showMessage}
          </DropArea>
          {/* <DropArea {...getRootProps()}>
            <input {...getInputProps()} />
            {/* {showMessage} 
          </DropArea> */}
        </div>
      </BoxInputData>
    </Container>
  );
};

export default ImportData;
