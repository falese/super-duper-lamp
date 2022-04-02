const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    } `)


const root = {
    hello: ()=> {
        return "Hello world!"
    },
}

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000);

console.log('GraphQL API is LIVE at localhost:4000')