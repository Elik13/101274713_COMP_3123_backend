import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import listingType from "../graphqlTypes/ListingType.js";
import Listing from "../models/Listing";

export const ListingCreation = new GraphQLObjectType({
        name: 'ListingCreation',
        type: listingType,
        fields: () => {
            return {
                listing: {
                    type: new GraphQLList(listingType),
                    args: {
                        listing_id: {
                            type: new GraphQLNonNull(GraphQLID)
                        },
                        listing_title: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        description: {type: GraphQLString},
                        street: {type: GraphQLString},
                        city: {type: GraphQLString}
                    },
                    resolve: async (root, args) => {
                        let listingDto = new Listing(args);
                        const listing = await listingDto.save();
                        if (!listing) {
                            throw new Error('error while creating data')
                        }
                        return listing;
                    }
                }
            }
        }
    })
;