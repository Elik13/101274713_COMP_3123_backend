import express from "express";
import mongoose from "mongoose";
import profileSchema from "./src/graphqlSchemas/ProfileSchema.js";
import {graphqlHTTP} from "express-graphql";

const DB_URL = "mongodb://mongoadmin:secret@localhost:27017/local-mongodb?authSource=admin"
const app = express();

// const root = {
//     listingName: ({name}) => {
//         return `This is listingName: ${name}`;
//     },
//     listingCity: ({city}) => {
//         return `This is listingCity: ${city}`;
//     },
//     listingPostalCode: ({postalCode}) => {
//         return `This is listingPostalCode: ${postalCode}`;
//     },
//     allUserBooking: () => {
//         return `This is allUserBooking`;
//     },
// };

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api/v1/graphql', graphqlHTTP({
    schema: profileSchema,
    rootValue: global,
    graphiql: true,
}));

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});