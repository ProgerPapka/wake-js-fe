import * as React from 'react';
import { TextInput } from '../components/input/text/text-input';

export const Service = React.memo(() => {
  return (
    <section>
      <ServiceForm />
    </section>
  );
});

const ServiceForm = React.memo(() => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="name" onChange={(value: any) => console.log(value)} />
      <TextInput name="description" onChange={(value: any) => console.log(value)} />
      <TextInput name="price" onChange={(value: any) => console.log(value)} />
      <input type="submit" value="Create service" />
    </form>
  );
});
