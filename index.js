try {
    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);

    const { PORT = 9090 } = process.env;

    app.use(express.static('public'));

    app.get('/logtest', function (req, res) {
        console.log('logtest');
        res.send('logtest')
    });

    server.listen(PORT, () => console.log(`App running on port ${PORT}`));

}
catch (e) {
    console.error('Error on startup');
    console.error(e);
}