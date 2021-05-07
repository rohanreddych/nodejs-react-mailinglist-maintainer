const { send } = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendMessage(toEmail){
    const msg = {
        to: toEmail,
        from: 'efgh2349@gmail.com',
        subject: 'Hello! Thanks for subscribing to our mailing list.',
        html: `<html><body><p><b>Welcome dear customer.</b></p></body></html>`,
      }
    try{
        const r = await sgMail.send(msg);
    }
    catch(err) {
        console.error(err)
    }
    console.log("Email sent")
}

module.exports = sendMessage;