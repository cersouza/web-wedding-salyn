import { createTransport } from 'nodemailer';

export default function Email({ subject, text }) {
    const transporterOptions = {
        service: 'outlook',
        auth: {
            user: 'meucasamentoeternizado@outlook.com',
            pass: 'Lw0oG6^o!Dwy'
        },
        tls: {
            rejectUnauthorized: false
        }
    }
    const transporter = createTransport(transporterOptions);

    const send = () => {
        let mailOptions = {
            from: 'meucasamentoeternizado@outlook.com',
            to: 'meucasamentoeternizado@outlook.com',
            subject: subject,
            text: text
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(`ERROR => ${err}`)
                return;
            } else {
                console.log(`EMAIL SENT: ${info.response}`);
            }
        });
    };

    return {
        send
    }
}