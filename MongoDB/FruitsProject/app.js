const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "FruitsDB";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("fruits");

  // the following code examples can be pasted here...
  // const insertResult = await collection.insertMany([
  //   { name: "banana", price: 2.0, review: "Awesome" },
  //   { name: "Apple", price: 1.3, review: "Good" },
  //   { name: "peaches", price: 1.0, review: "Fine" },
  // ]);
  // console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
