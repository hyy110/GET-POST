const express = require('express');
const app = express();
const router = require('./apiRouters/router')
const cors = require('cors');

app.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback
    const data = {name: 'hyy ', age: 20}
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;

    res.send(scriptStr)
})
app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use('/api', router);

app.listen(80, () => {
    console.log('http://127.0.0.1');
})