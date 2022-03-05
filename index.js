const express = require('express');
const hpp = require('hpp');
const path = require('path');

// Initialize App
const app = express();

// Prevent Http Params Pollution
app.use(hpp());

// Serve "Public" folder as a static directory
app.use(express.static(__dirname + '/public'));

// Render the production build of the app
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// PORT Setup and Server Setup on PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
