const mongoose = require("mongoose");

const connToMongoAtlas = async () => {

    const connObj = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`\nConnection to mongodb was successfull ${connObj.connection.host}`);


}


module.exports = connToMongoAtlas;

