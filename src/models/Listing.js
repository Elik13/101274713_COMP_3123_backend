import mongoose from "mongoose";

let listingSchema = mongoose.Schema({
    listing_id: String,
    listing_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

export default mongoose.model("Listing", listingSchema);
