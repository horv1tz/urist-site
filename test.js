const nodemailer = require('nodemailer');
const directTransport = require('nodemailer-direct-transport');
const fromHost = `horvitz.ru`;
const from = 'Mail' + '@' + fromHost; //придумываете свою почту(может быть несуществующая)
const to = "leoniddacenko95@gmail.com".trim();
const transport = nodemailer.createTransport(directTransport({
  name: fromHost
}));
transport.sendMail({
  from, to,
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
