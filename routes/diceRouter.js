var express = require('express');
var router = express.Router();

function rollD4(){
    return Math.floor(Math.random() * Math.floor(4) + 1)
}
function rollD6(){
    return Math.floor(Math.random() * Math.floor(6) + 1)
}
function rollD8(){
    return Math.floor(Math.random() * Math.floor(8) + 1)
}
function rollD10(){
    return Math.floor(Math.random() * Math.floor(10) + 1)
}
function rollD12(){
    return Math.floor(Math.random() * Math.floor(12) + 1)
}
function rollD20(){
    return Math.floor(Math.random() * Math.floor(20) + 1)
}
function rollD100(){
    return Math.floor(Math.random() * Math.floor(100) + 1)
}

router.get('/', (req, res) => {
    let die = req.query.dice;
    console.log('Rolling a', die);
    if(die == 'd4') {
        res.json({
            status: 200,
            message: 'success',
            data: rollD4()
        })
    } else if(die == 'd6') {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD6()
        })
    } else if(die == 'd8') {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD8()
        })
    } else if(die == 'd10') {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD10()
        })
    } else if(die == 'd12') {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD12()
        })
    } else if(die == 'd20') {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD20()
        })
    } else {
        res.json({
            status: 200, 
            message: 'success',
            data: rollD100()
        })
    }
})

module.exports = router