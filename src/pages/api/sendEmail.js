import Email from "../../services/Email";

export default function handler(req, res) {
    try {
        let {subject, text} = req.body;
        const emailer = Email({subject, text});
        emailer.send();

        res.status(200).json({ message: 'Enviado com sucesso' });
    } catch(error) {
        res.status(400).json({ message: 'Ocorreu um erro', error });
    }
}