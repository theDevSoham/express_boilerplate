const express = require('express')
const PORT = process.env.PORT || 5500;

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}!`)
});