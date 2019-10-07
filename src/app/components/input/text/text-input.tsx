import React, { ChangeEvent, useState } from 'react';

export interface TextInputProps {
  name: string;
  onChange: (value: any) => any;
  placeholder?: string;
  mask?: string;
  value?: string;
  type?: string;
}

const TextInputUI = ({ onChange, placeholder, value: initValue, name, type = 'text' }: TextInputProps) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value);
  };

  return <input name={name} type={type} onChange={handleChange} placeholder={placeholder} value={value} />;
};

export const TextInput = React.memo(TextInputUI);
