import React, { useEffect } from "react";

// import { Container } from './styles';

const Login: React.FC = () => {
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
    });
  }, []);

  function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ ok: true });
      }, 5000);
    });
  }
  return <div />;
};

export default Login;
