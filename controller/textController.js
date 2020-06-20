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
            if (response.length > 0) {
                resolveNext(response);
                res.json({
                    status: 200,
                    message: 'success',
                    data: response
                })
            } else { 
                res.json({
                    status: 404,
                    message: 'empty response',
                    data: 
                })
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
    console.log('resolving next...')
    if (text[0].hasNextParagraph) {
        page += 1;
        part = 1;
    } else {
        part += 1;
    }
    console.log('next will be page ', page, ' part ', part)
}

module.exports = { getNext, createText };