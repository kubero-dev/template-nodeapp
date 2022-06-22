try {
    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);

    const { PORT = 9090 } = process.env;

    /*
    app.use(
        express.static('public')
    );
    */

    app.get('/', (req, res) => {
        res.send('hostname: <p><pre>'+JSON.stringify(process.env)+'</pre>')
    });

    app.get('/hello', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/sendtolog', function (req, res) {
        console.log('logtest: '+req.query.message);
        res.send('logtest: '+req.query.message)
    });

    server.listen(PORT, () => console.log(`App running on port ${PORT}`));

}
catch (e) {
    console.error('Error on startup');
    console.error(e);
}