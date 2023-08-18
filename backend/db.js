const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodnow:foodnow123@foodnow.zgyt6dz.mongodb.net/foodnowmern?retryWrites=true&w=majority';
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!!');
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray()
    const food_category = mongoose.connection.db.collection("food_category");
    let catData = await food_category.find({}).toArray()
    global.food_items = data;
    global.food_category = catData;
    console.log()
  } catch (error) {
    console.log('err: ', error);
  }
};
mongoose.set('strictQuery', false);
module.exports = mongoDB;