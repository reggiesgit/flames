const textSchema = require('../model/textModel');

var page = 0;
var part = 1;

const getNext = (req, res) => {
    let filter = {};
    filter['paragraphNr'] = page;
    filter['paragraphPart'] = part;

    console.log('Looking for page ', page, ' part ', part);
    textSchema.find(filter)
        .then(response => {
            res.json({
                status: 200,
                message: 'success',
                data: JSON.stringify(response, null, 1)
            })
            if (response[0].hasNextParagraph) {
                page += 1;
                part = 1;
            } else {
                part += 1;
            }
        })
        .catch(err => {
            res.json({
                status: 500,
                message: err.message
            })
        })
}

const createText = (req, res) => {
    const text = new textSchema({
        title: req.body.title,
        paragraphNr: req.body.pnr,
        paragraphPart: req.body.ppt,
        paragraphText: req.body.ptxt,
        hasNextParagraph: req.body.hnxt,
        nextParagraphSuccess: req.body.nxtok,
        nextParagraphFailure: req.body.nxtnok
    });

    text.save().then(() => {
        console.log('Text Created'); // print in console
        res.status(200).json({ message: 'Text Created' }); // send json to requester
    }).catch((err) => {
        res.status(500).json({ message: err });
    });
};

function resolveNext(text) {
    console.log('resolving next... ', text)
    if (text[0].hasNextParagraph) {
        page += 1;
        part = 1;
    } else {
        part += 1;
    }
}

module.exports = { getNext, createText };