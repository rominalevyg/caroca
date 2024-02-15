
const nodemailer = require('nodemailer');

// Configura el transportador de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'studiocaroca@gmail.com',
        pass: '2024Caroca#'
    }
});

// Define el correo electrónico a enviar
const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'destinatario@example.com',
    subject: 'Asunto del correo',
    text: 'Contenido del correo'
};

// Envía el correo electrónico
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo electrónico enviado: ' + info.response);
    }
});