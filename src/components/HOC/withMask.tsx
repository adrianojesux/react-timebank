import React from "react";

const WithMask = (Wrapped: any, maskAplly: (value: string) => string) => ({
  onChange = (formatted: string) => {},
  value = "",
  ...props
}) => {
  const handleMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueFormatted = maskAplly(value);
    console.log(valueFormatted);
    onChange(valueFormatted);
  };

  return <Wrapped value={value} onChange={handleMask} {...props} />;
};

export default WithMask;
