const mongoose = require('mongoose')

    const Paragraph = new mongoose.Schema({
        title: {type: String},
        paragraphNr: {type: Number},
        paragraphPart: {type: Number},
        paragraphText: {type: String},
        hasNextParagraph: {type: Boolean},
        nextParagraphSuccess: {type: Number},
        nextParagraphFailure: {type: Number},
        hasNextPart: {type: Boolean},
    })

module.exports = mongoose.model('paragraph', Paragraph, 'paragraph')