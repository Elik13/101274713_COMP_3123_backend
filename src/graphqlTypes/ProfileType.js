import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const listingType = new GraphQLObjectType({
    name: 'listing',
    fields: () => {
        return {
            listing_id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            listing_title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {type: GraphQLString},
            street: {type: GraphQLString},
            city: {type: GraphQLString}
        }
    }
});
