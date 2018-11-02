import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import { mutationResolvers } from './resolvers/mutationResolvers';
import { queryResolvers } from './resolvers/queryResolvers';
import User from './entity/User';

const typeDefs = importSchema(`${__dirname}/schemas/schema.graphql`);

const resolvers = { ...queryResolvers, ...mutationResolvers };
const userSchema = makeExecutableSchema({ typeDefs, resolvers });
export { userSchema, User };
