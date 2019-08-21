import React from 'react';
import { map } from 'lodash';
import { Select } from '../components/select';
import { useQuery } from '@apollo/react-hooks';
import { services, users } from './graphql/queries';
import { Services, Users } from './graphql/types';

export const Reservation = React.memo(() => {
  return (
    <section>
      <form>
        <UserList />
        <ServiceList />
      </form>
    </section>
  );
});

const UserList = React.memo(() => {
  const result = useQuery<Users>(users);
  const { data, loading } = result;
  const items = map(data && data.users, user => ({
    label: `${user.surname} ${user.name}`,
    value: user
  }));
  return loading ? (
    <span>Идет загрузка пользователей</span>
  ) : (
    <Select name="user-list" items={items} onSelect={value => console.log(value)} />
  );
});

const ServiceList = React.memo(() => {
  const result = useQuery<Services>(services);
  const { data, loading } = result;
  const item = map(data && data.services, service => ({
    label: service.name,
    value: service
  }));
  return loading ? (
    <span>Идет загрузка услуг</span>
  ) : (
    <Select name="service-list" items={item} onSelect={value => console.log(value)} />
  );
});
