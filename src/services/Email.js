import sgMail from '@sendgrid/mail'

export default function Email({ subject, text }) {

    const sendGridKey = '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';

    sgMail.setApiKey(sendGridKey);

    const send = () => {
        let msg = {
            from: 'contato@meucasamentoeternizado.com.br',
            to: 'contato@meucasamentoeternizado.com.br',
            subject: subject,
            text: text
        };

        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
              })
              .catch((error) => {
                console.error(error)
              });
    };

    return {
        send
    }
}