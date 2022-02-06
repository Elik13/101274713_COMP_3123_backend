import {GraphQLObjectType, GraphQLSchema} from "graphql";
import profileQuery from "../graphqlOperations/ProfileQuery.js";
import profileMutation from "../graphqlOperations/ProfileMutation.js";

const ProfileSchema = new GraphQLSchema({
    query: profileQuery,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: profileMutation
    })
});

export default ProfileSchema;