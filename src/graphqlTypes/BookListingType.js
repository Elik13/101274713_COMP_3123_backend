import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
    name: 'bookListing',
    fields: () => {
        return {
            listing_id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            booking_id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            booking_date: {type: new GraphQLNonNull(GraphQLString),},
            booking_start: {type: new GraphQLNonNull(GraphQLString)},
            booking_end: {type: new GraphQLNonNull(GraphQLString)},
            username: {type: new GraphQLNonNull(GraphQLString)}
        }
    }
});
