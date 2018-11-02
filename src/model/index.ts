import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from 'graphql-tools';

import { userSchema } from './User';

const schemas: GraphQLSchema[] = [userSchema];

export default mergeSchemas({ schemas });
