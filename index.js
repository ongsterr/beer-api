const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRouter = require('./auth/authRouter');


// Env variables
const port = process.env.PORT || 8000; // TODO: make env variable

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, it works!'
  })
})

app.use('/auth', authRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));