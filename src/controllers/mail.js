const sendMail = async (req, res) => {
    const send = () => {
        to, subject, body // Implementation of sending email
    };
    const{ to, subject, body} = req.body 
    send(); // Call the send function

    return res.json('Email enviado com sucesso!');
}

module.exports = {
    sendMail
}
