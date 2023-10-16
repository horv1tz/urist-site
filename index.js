const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');

const app = express();

// Logging middleware function
function logger(req, res, next) {
    console.log(`Received request at ${new Date().toISOString()}:`, req.method, req.url);
    next();
}
// Add the logging middleware function to the pipeline
app.use(logger);

// Serve static files from the public directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    res.redirect("/");
    const number = req.body.number;
    const email = req.body.email;
    const name = req.body.name;
    const ask = req.body.ask;

    const fromHost = `mail.my`;
    const from = 'Mail' + '@' + fromHost;
    const to = "horvitz@vk.com";
    const transport = nodemailer.createTransport(directTransport({
        name: fromHost
    }));
    transport.sendMail({
        from,
        to,
        subject: 'Заголовок письма',
        html: `
        <h1>Ваше письмо</h1>
        `
    }, (err, data) => {
        if (err) {
            console.error('Ошибка при отправке:', err);
        } else {
            console.log('Письмо отправлено');
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});