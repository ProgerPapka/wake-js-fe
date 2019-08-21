import React, { SyntheticEvent } from 'react';
import { TextInput } from '../components/input/text/text-input';

export const User = React.memo(() => {
  return (
    <section>
      <UserForm />
    </section>
  );
});

const UserForm = React.memo(() => {

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput name="name" onChange={(val: any) => console.log(val)} placeholder="Имя" />
      <TextInput name="surname" onChange={(val: any) => console.log(val)} placeholder="Фамилия" />
      <TextInput name="middleName" onChange={(val: any) => console.log(val)} placeholder="Отчество" />
      <TextInput name="email" type="email" onChange={(val: any) => console.log(val)} placeholder="Email" />
      <TextInput name="number" onChange={(val: any) => console.log(val)} placeholder="Телефон" />
      <input type="submit" value="Создать пользователя" />
    </form>
  );
});
