// Import necessary modules and functions
const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { generateUser, generateThoughts } = require("./data");

// Handle connection error
connection.on("error", (err) => err);

// Once connection is open, execute the seeding process
connection.once("open", async () => {
  console.log("connected");

  // Check if 'users' collection exists and drop it if it does
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  // Check if 'thoughts' collection exists and drop it if it does
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // Generate users and thoughts data
  const users = generateUser();
  const thoughts = generateThoughts(20);

  // Insert generated user and thought data into their respective collections
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log the inserted data for verification
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
