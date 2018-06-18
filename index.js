const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let data = {};

app.get('/', (req, res) => res.json({'response': 'success'}));

app.post('/data', (req, res) => {
    console.log(req.body.data);
    data = req.body;
    res.json(data);
  })

app.get('/data', (req, res) => {
    res.json(data);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))