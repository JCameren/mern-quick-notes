require("dotenv").config();
require("./config/database");

const Note = require('./models/note')

    const note = Note.insertOne({
        text: "This a text document",
        user: ObjectId('6393cfaebf555cf5d31aef02')
    })
    console.log(note)
    process.exit();
