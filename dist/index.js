import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
  type Query {
    login(email: String!, password: String!): Login
    register(email: String!, password: String!): Register
    user(id: Int!): User
  }

  type Login {
    token: String
  }

  type Register {
    token: String
    id: Int
  }

  type User {
    data: Data
    support: Support
  }

  type Data {
    id: Int
    email: String
    first_name: String
    last_name: String
    avatar: String
  }

  type Support {
    url: String
    text: String
  }
`;
const login = {
    token: "qwertyuiopasdfghjklzxcvbnm",
};
const register = {
    token: "qwertyuiopasdfghjklzxcvbnm",
    id: 4,
};
const user = {
    data: {
        id: 4,
        email: " eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    support: {
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
};
const resolvers = {
    Query: {
        login: () => login,
        register: () => register,
        user: () => user,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const port = Number.parseInt(process.env.PORT) || 4000;
const { url } = await startStandaloneServer(server, { listen: { port } });
console.log(`🚀 Server listening at: ${url}`);
