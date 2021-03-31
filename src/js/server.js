const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(compression());

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  },
  function (err) {
    if (err) return console.log('Error: ', err);
    console.log(
      'MongoDB Connection -- Ready state is:',
      mongoose.connection.readyState
    );
  }
);

app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const transpoter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transpoter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/send', (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    const mail = {
      form: data.name,
      to: process.env.EMAIL,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };

    transpoter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Something went wrong.');
      } else {
        res.status(500).send('Email successfully sent to recipient!');
      }
    });
  });
});
