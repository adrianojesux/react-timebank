import styled, { css, StyledFunction } from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade 0.5s ease-in-out backwards;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BoxInputData = styled.div`
  height: 500px;
  width: 500px;
  background-color: #fff;
  animation: present 0.5s ease-in-out backwards;
  padding: 16px;
  display: flex;
  flex-direction: column;

  .box-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    border-bottom: solid 1px #f6f6f6;

    h1 {
      font-size: 16px;
      color: #666;
      margin: 8px;
    }
  }

  .box-body {
    flex: 1;
    width: 100%;
    padding: 8px 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display: flex;

    span {
      text-align: center;
      font-weight: 300;
      margin: 0 16px;
    }
  }

  @keyframes present {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    80% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

// export const DropArea = styled.div``;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const DropBase = styled.div<any>``;

export const DropArea = styled(DropBase).attrs({
  className: "dropzone",
})`
  border: 2px dashed #ddd;
  background-color: #f6f6f6;
  border-radius: 4px;
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors: any = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

interface UploadProps {
  type?: "error" | "success";
}

export const UploadMessage = styled.p<UploadProps>`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
