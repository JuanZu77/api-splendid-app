import server from "./app";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
const { PASSWORD } = process.env;
const MONGO_URL = `mongodb+srv://splendid:${PASSWORD}@cluster0.4a8kswg.mongodb.net/?retryWrites=true&w=majority`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
