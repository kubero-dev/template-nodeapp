try {
    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);

    const { PORT = 9090 } = process.env;

    let os = require("os");
    let hostname = os.hostname();
    let uptime = os.uptime();
    let arch = os.arch();
    let release = os.release();
    let loadavg = os.loadavg();
    let totalmem = os.totalmem();
    let env = JSON.stringify(process.env, null, 4)
    /*
    app.use(
        express.static('public')
    );
    */

    app.get('/', (req, res) => {

        res.send (`
        <a href="/sendtolog?message=hello">send a message to the log</a><p>
        hostname : ${hostname}<p>
        uptime : ${uptime}<p>
        arch : ${arch}<p>
        release : ${release}<p>
        loadavg : ${loadavg}<p>
        totalmem : ${totalmem}<p>
        <pre><code>${env}</code></pre>
        
        `)
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
