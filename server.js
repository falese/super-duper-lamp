require('dotenv').config()
const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT
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

app.listen(port);

console.log(`GraphQL is LIVE at localhost:${port}`)