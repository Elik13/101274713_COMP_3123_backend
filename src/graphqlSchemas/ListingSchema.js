import {GraphQLObjectType, GraphQLSchema} from "graphql";
import listingQuery from "../graphqlOperations/ListingQuery.js";
import {ListingCreation} from "../graphqlOperations/ListingCreation";

const ListingCreation = new GraphQLSchema({
    query: listingQuery,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: ListingCreation
    })
});

export default ListingCreation;