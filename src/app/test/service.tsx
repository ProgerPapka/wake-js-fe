import * as React from 'react';
import { TextInput, TextArea} from '../components/input';

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
      <TextInput name="name" onChange={(value: any) => console.log(value)} placeholder="Наименование сервиса/услуги"/>
      <TextArea name="description" onChange={(value: any) => console.log(value)} placeholder="Краткое описание"/>
      <TextInput name="price" type="number" onChange={(value: any) => console.log(value)} placeholder="Цена"/>
      <input type="submit" value="Создать услугу/сервис" />
    </form>
  );
});
