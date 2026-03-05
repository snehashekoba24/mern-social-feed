require("dotenv").config(); //to access the values of the variables from env file
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})