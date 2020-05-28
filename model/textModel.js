const mongoose = require('mongoose')

    const ParagraphSchema = new mongoose.Schema({
        title: {type: String},
        paragraphNr: { type: Number },
        paragraphPart: {type: Number},
        paragraphText: {type: String},
        hasNextParagraph: {type: Boolean},
        nextParagraphSuccess: {type: Number},
        nextParagraphFailure: {type: Number}
    })

module.exports = mongoose.model('paragraphs', ParagraphSchema)