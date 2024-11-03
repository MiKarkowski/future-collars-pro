const dotenv = require('dotenv');
const app = require('./index');
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const uri = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(() => console.log("Connected to MongoDB"));


//MONGOOSE

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pageNum: { type: Number, required: true },
    imageURL: { type: String, required: true },
    topic: { type: String, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
 })
 
const Book = mongoose.model("Book", bookSchema);
Book.findById('67029909964f8e391ed9cd19').then((book) => console.log("Book found", book));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});