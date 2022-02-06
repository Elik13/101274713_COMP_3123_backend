import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
    name: 'listing',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            username: {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
            firstname: {type: new GraphQLNonNull(GraphQLString)},
            lastname: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: GraphQLString},
            type: {type: GraphQLString}
        }
    }
});
