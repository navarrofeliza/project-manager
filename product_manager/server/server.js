// 1. import all dependencies
const express = require("express");
const cors = require("cors");
const app = express();

// 1.5 config mongoose
require("./config/mongoose.config");

// 2. config express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. run the routes
require("./routes/product.routes")(app);

//4. RUN YOUR EXPRESS SERVER **
app.listen(8001, () => console.log(`Server is over 8001!`));
