import React, { SyntheticEvent } from 'react';
import { TextInput } from '../components/input/text/text-input';

const UserDataUI = () => {
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput onChange={(val: any) => console.log(val)} placeholder="Имя"/>
      <TextInput onChange={(val: any) => console.log(val)} placeholder="Фамилия"/>
      <TextInput onChange={(val: any) => console.log(val)} placeholder="Отчество"/>
      <input type="email" placeholder="Email"/>
      <input type="number" placeholder="Телефон"/>
      <input type="submit" value="Ok"/>
    </form>
  );
};

export const UserData = React.memo(UserDataUI);
