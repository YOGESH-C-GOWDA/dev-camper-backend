const bootcamp = require("../model/BootcampSchema.js");
const { Mongoose } = require("mongoose");
//@desc       Get all bootcamp
//@route      Get   /api/v1/bootcamp
//@access     public 

module.exports.getBootcamps = async (req, res, next) => {
    try {

        const dataFromCollection = await bootcamp.find()
        res.status(200);
        res.json({
            success: "true",
            body: dataFromCollection
        });

    } catch (err) {
        res.status(400);
        res.json({
            success: "false",
            body: "Failed to respond "
        });
        console.log("\nError in post request or doc creation in database=\t", err)

    }

}

//@desc       bootcamp
//@route      post   /api/v1/bootcamp
//@access     public 

module.exports.postBootcamps = async (req, res, next) => {

    try {
        console.log(`request body${req.body}`.yellow)

        const data = await bootcamp.create(req.body);
        res.status(201);
        res.json({
            success: "true",
            body: `Post request with parama ${req.params}`
        });
    } catch (e) {
        res.status(400);
        res.json({
            success: "false",
            body: "Failed to respond "
        });
        console.log("\nError in post request or doc creation in database=\t", e)
    }

}


//@desc       edit a profile in bootcamp
//@route      Put   /api/v1/bootcamp/:id
//@access     privte

module.exports.putBootcamps = async (req, res, next) => {

    try {
        res.status(200);

        res.json({
            success: "true",
            body: "put"
        });

    } catch (err) {
        res.status(400);
        res.json({
            success: "false",
            body: "Failed to respond "
        });
        console.log("\nError in post request or doc creation in database=\t", err)

    }

}


//@desc       delete a profile in bootcamp
//@route      Put   /api/v1/bootcamp/:id
//@access     privte

module.exports.deleteBootcamps = async (req, res, next) => {

    try {
        res.status(200);
        res.json({
            success: "true",
            body: "delete"
        });

    } catch (err) {
        res.status(400);
        res.json({
            success: "false",
            body: "Failed to respond "
        });
        console.log("\nError in post request or doc creation in database=\t", err)

    }

}


