const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        max: [50, "Maximim  50 charecters allowed"],
        unique: true,
        required: true,
        trim: true,
    },
    slug: String,
    website: {
        type: String,
        //regresive expression for valid email address 
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Please add a valid address"],
    },
    phone: {
        type: String,
        maxlength: [20, "Phone number should not be more than  20 charecters"]
    },
    email: {
        type: String,
        match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please add a valid email"]

    },
    address: {
        type: String,
        required: true
    },
    location: {
        // datatype GeoJSON Point
        type: {
            type: String,
            enum: ["Point"],
            // require: true
        },
        coordinates: {
            type: [Number],
            // required: true,
            index: "2dsphere"
        },
        // we extract these infrom the mongoose middleware so dont worry
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,

    },
    careers: {
        type: [String],
        required: true,
        enum:
            ["Web Development"
                , "UI/UX"
                , "Mobile Developement"
                , "Data science"
                , "Data Analyst"
                , "Computer Vision"
                , "Visualization and Mapping"
                , "Others"]
    },
    // Average rating will be renerated
    averageRating: {
        type: Number,
        min: [1, "Rating must be atleat 1"],
        max: [10, "Rating can maximum be 10"]

    },
    averageCost: Number,
    photo: {
        type: String,
        default: "demo.jpg"
    },
    housing: {
        type: Boolean,
        default: false

    },
    jobAssitance: {
        type: Boolean,
        default: false

    },
    jobGuarentee: {
        type: Boolean,
        default: false

    },
    acceptGi: {
        type: Boolean,
        default: false

    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
