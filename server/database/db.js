const mongoose = require('mongoose');

const mongodb_SRV = process.env.MONGODB_URL;

mongoose.connect(mongodb_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully");
}).catch((error) => {
  console.log("Mongo error:", error);
});