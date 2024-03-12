const express = require('express');
const port = 3010;

const app = express();

app.use(express.static('stuff'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/stuff/index.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

