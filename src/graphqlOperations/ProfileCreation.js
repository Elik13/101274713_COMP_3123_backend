import {GraphQLList, GraphQLNonNull, GraphQLObjectType} from "graphql";
import Profile from "../models/Profile.js";
import {profileType} from "../graphqlTypes/ProfileType.js";

export const ProfileCreation = new GraphQLObjectType({
        name: 'ProfileCreation',
        type: profileType,
        fields: () => {
            return {
                profile: {
                    type: new GraphQLList(profileType),
                    args: {
                        username: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        firstname: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        lastname: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        password: {
                            type: new GraphQLNonNull(GraphQLString),
                            regexp: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
                        },
                        email: {
                            type: new GraphQLNonNull(GraphQLString),
                            regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        },
                        type: {
                            type: new GraphQLNonNull(GraphQLString),
                            regexp: /admin|customer/g
                        }
                    },
                    resolve: async (root, args) => {
                        let profileDto = new Profile(args);
                        const profile = await profileDto.save();
                        if (!profile) {
                            throw new Error('error while creating data')
                        }
                        return profile;
                    }
                }
            }
        }
    })
;