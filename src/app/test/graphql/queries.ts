import {gql} from 'apollo-boost';

export const users = gql`
    query Users {
        users {
            id
            name
            surname
            middlename
            phone
            email
            password
        }
    }
`;

export const services = gql`
    query Services {
        services {
            id
            price
            name
            description
            photos
        }
    }
`;
