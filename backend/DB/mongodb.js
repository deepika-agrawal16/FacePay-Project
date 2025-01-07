const mongoose = require('mongoose');
require('dotenv').config();


const connecttoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to database");
  } catch (error) {
    console.log(`error connecting to database ${error}`);
  }
};
module.exports = connecttoDB;
