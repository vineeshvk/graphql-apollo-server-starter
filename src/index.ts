import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import schema from './model';

const startServer = async () => {
	const server = new ApolloServer({ schema });
	await createConnection();
	server.listen().then(({ url }) => console.log(`connected at ${url}`));
};

startServer();
