const express = require('express');
const mongoose = require('mongoose');

//const indexRouter = require('./routes/index');
const textRouter = require('./routes/textRouter');
const diceRouter = require('./routes/diceRouter');

const app = express();
app.use(express.json());

//app.use('/', indexRouter);
app.use('/api/texts', textRouter);
app.use('/api/roll', diceRouter);

const mongoURI = 'mongodb+srv://reggie:burn1nH311@flames-8qxdn.gcp.mongodb.net/cocTexts?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(5000, () => { console.log('API running at: http://localhost:5000');});
}).catch((err) => {
    console.log('Error: ', err);
});

app.get('/hello', (req, res) => {
    res.status(200).json({message: 'Howdy Stranger.'});
})