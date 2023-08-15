import { gql } from '@apollo/client';

const GET_ADDED_POST = gql`
  query MyQuery {
    getCombinedData {
      Dashboard_id
      description
      secretKey
      sender
      title
      email
    }
  }
`;

const GET_BUYED_POST = gql`
  mutation ($buyerId: String!, $buyerEmail: String!, $userName: String!) {
    getCombinedDataById(id: $buyerId, buyerEmail: $buyerEmail, userName: $userName) {
      Dashboard_id
      price
      description
      title
      buyerEmail
      email
    }
  }
`;

export { GET_ADDED_POST, GET_BUYED_POST };
