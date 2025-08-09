const express = require("express");
const app = express();
const { createUserTable } = require("./models/auth-model");

// parse the body
app.use(express.json());

createUserTable()
  .then(() => console.log("User table has been created"))
  .catch((error) => console.log(error));

app.use("/api/auth", require("./routes/auth-route"));

app.listen(8080, () => {
  console.log("Server is running");
});
