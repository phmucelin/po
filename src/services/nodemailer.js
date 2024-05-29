const nodemailer = require('nodemailer');

const  send = async (to, subject, body) => {
    transporter.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject,
        text: body
    })

}


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass:  process.env.MAIL_PASS
    }
})


module.exports = send