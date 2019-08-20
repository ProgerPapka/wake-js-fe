import React, { ChangeEvent, useState } from 'react';

export interface TextInputProps {
  onChange: Function;
  placeholder?: string;
  mask?: string;
  value?: string;
}

const TextInputUI = ({
  onChange,
  placeholder,
  value: initValue
}: TextInputProps) => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setValue(value);
    onChange(value);
  };

  return (
    <input type="text" onChange={onChangeValue} placeholder={placeholder} value={value}/>
  );
};

export const TextInput = React.memo(TextInputUI);
