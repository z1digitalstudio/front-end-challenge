import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';

export const ApolloInstance: ApolloClient<NormalizedCacheObject> =
  new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Song: { keyFields: ['id'] },
      },
    }),
    uri: 'https://api-frontend-challenge.herokuapp.com',
  });
