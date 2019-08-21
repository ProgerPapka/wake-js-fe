import React, { ChangeEvent, useState } from 'react';

export interface TextAreaProps {
  name: string;
  onChange: (value: any) => any;
  placeholder?: string;
}

export const TextArea = React.memo(({ name, onChange, placeholder }: TextAreaProps) => {
  const [value, setValue] = useState();

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value);
  };

  return <textarea name={name} value={value} onChange={handleChangeValue} placeholder={placeholder} />;
});
