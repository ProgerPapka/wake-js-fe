import React, { FormEvent } from 'react';
import { map } from 'lodash';
import { Item } from './select.types';

export interface SelectProps {
  name: string;
  items: Array<Item>;
  size?: number;
  onSelect: (value: any) => void;
}

export const Select = ({ name, items, size, onSelect }: SelectProps) => {
  const handleSelect = (e: FormEvent<HTMLSelectElement>) => {
    onSelect(e.currentTarget.value);
  };

  return (
    <select size={size} name={name} onChange={handleSelect} defaultValue="">
      <option disabled style={{ display: 'none' }} />
      {map(items, item => (
        <option key={item.value} value={item.value} label={item.label} />
      ))}
    </select>
  );
};
