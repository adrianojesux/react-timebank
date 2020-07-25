import React from "react";

// import { Container } from './styles';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | any;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  onBlur,
  placeholder,
}) => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
