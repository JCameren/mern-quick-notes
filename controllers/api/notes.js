const Note = require('../../models/note')

const index = async (req, res) => {
    const notes = await Note.find({user: req.user._id})
    res.json(notes)
}

const create = async (req, res) => {
    req.body.user = req.user._id
    const note = await Note.create(req.body)
    res.json(note)
}

module.exports = {
    index,
    create
}