//@desc       Get all bootcamp
//@route      Get   /api/v1/bootcamp
//@access     public 

module.exports.getBootcamps = (req, res, next) => {
    res.status(200);
    res.json({
        success: "true",
        body: "welcome to devbood camp dear fellow members"
    });
}

//@desc       bootcamp
//@route      post   /api/v1/bootcamp
//@access     public 

module.exports.postBootcamps = (req, res, next) => {
    res.status(200);
    res.json({
        success: "true",
        body: `Post request with parama ${req.params.id}`
    });
}


//@desc       edit a profile in bootcamp
//@route      Put   /api/v1/bootcamp/:id
//@access     privte

module.exports.putBootcamps = (req, res, next) => {
    res.status(200);
    res.json({
        success: "true",
        body: "put"
    });
}

//@desc       delete a profile in bootcamp
//@route      Put   /api/v1/bootcamp/:id
//@access     privte

module.exports.deleteBootcamps = (req, res, next) => {
    res.status(200);
    res.json({
        success: "true",
        body: "delete"
    });
}