import {GraphQLList, GraphQLObjectType} from "graphql";
import Profile from "../models/Profile.js";
import {profileType} from "../graphqlTypes/ProfileType.js";

export default new GraphQLObjectType({
    name: 'ProfileQuery',
    fields: () => {
        return {
            profile: {
                type: new GraphQLList(profileType),
                resolve:  async ()=> {
                    const profiles = await Profile.find();
                    if (!profiles) {
                        throw new Error('error while fetching data')
                    }
                    return profiles;
                }
            }
        }
    }
});