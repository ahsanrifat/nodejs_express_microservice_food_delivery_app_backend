import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
// so that this app accepts json data from post request
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello world");
});

//  connecting to mongoDB
// "mongodb://admin:password@user_service_db:27017/user_db"
mongoose
  .connect("mongodb://admin:password@user_service_db:27017")
  .then(() => app.listen(3000))
  .then(() => {
    console.log("===>> Connected to mongodb and listening to port 3000 <<====");
    mongoose.connection.useDb("user_service_db");
  })
  .catch((err) => console.log(`Error in startup ==> ${err}`));
