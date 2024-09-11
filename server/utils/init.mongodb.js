import mongoose from "mongoose";
const connectionUrl = process.env.MONGO_URL;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(connectionUrl, { maxPoolSize: 10 })
      .then((_) => {
        console.log("Connected MongoDB successfully");
      })
      .catch((err) => {
        console.error("Error while connecting MongoDB:", err.message);
        process.exit(1); // Exit with status 1 to indicate an error
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export default Database.getInstance;
