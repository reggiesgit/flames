const mongoose = require('mongoose')

    const Paragraph = new mongoose.Schema({
        title: {type: String},
        _paragraphNr: { type: Number },
        get paragraphNr() {
            return this._paragraphNr;
        },
        set paragraphNr(value) {
            this._paragraphNr = value;
        },
        paragraphPart: {type: Number},
        paragraphText: {type: String},
        hasNextParagraph: {type: Boolean},
        nextParagraphSuccess: {type: Number},
        nextParagraphFailure: {type: Number}
    })

module.exports = mongoose.model('paragraph', Paragraph, 'paragraph')