export type Id = number | string;

export interface User {
  id: Id;
  name: string;
  surname: string;
  middlename: string;
  phone: string;
  email: string;
}

export interface Users {
  users: Array<User>;
}

export interface Service {
  id: Id;
  price: number;
  name: string;
  description: string;
}

export interface Services {
  services: Array<Service>;
}
