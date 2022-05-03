const mongoose = require("mongoose");

// here we create the database after the localhost/27017/

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// creating the schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// creating a collection
// make sure to name the collection with individual as mongoose will just make the plural of it
const Fruit = mongoose.model("Fruit", fruitSchema);

// creating an object
const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review: "Red Good apples.",
});

// adding this fruit to the db
// fruit.save();
// make sure to run this command just once as it will just add the same fruit everytime

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Abdelrahman",
  age: 22,
});

// person.save();

// adding some more fruits
const kiwi = new Fruit({
  name: "kiwi",
  rating: 8,
  review: "Awesome fruit.",
});
const orange = new Fruit({
  name: "orange",
  rating: 9,
  review: "oragnge fruit.",
});
const banana = new Fruit({
  name: "banana",
  rating: 7,
  review: "yellow fruit.",
});

Fruit.insertMany([kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully added fruits");
  }
});
