import {GraphQLList, GraphQLObjectType} from "graphql";
import {listingType} from "../graphqlTypes/ProfileType";
import Listing from "../models/Listing";

export default new GraphQLObjectType({
    name: 'ListingQuery',
    fields: () => {
        return {
            profile: {
                type: new GraphQLList(listingType),
                resolve: async () => {
                    const listing = await Listing.find();
                    if (!listing) {
                        throw new Error('error while fetching data')
                    }
                    return listing;
                }
            }
        }
    }
});