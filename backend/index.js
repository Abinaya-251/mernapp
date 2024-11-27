// backend/server.js
const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send(`Hello from ${hostname}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

