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
      <TextInput name="middlename" onChange={(val: any) => console.log(val)} placeholder="Отчество" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Телефон" />
      <input type="submit" value="Create user" />
    </form>
  );
});
