import { GQL } from '../schemas/schema';
import { ResolverMap } from '../../config/graphql-utils';

export const mutationResolvers: ResolverMap = {
	Mutation: {
		bye: (_, name: GQL.IByeOnMutationArguments) => 'bye'
	}
};
