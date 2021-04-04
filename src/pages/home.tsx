import axios from "axios";
import { useState } from "react";

export default function Home() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [dateEvent, setDateEvent] = useState('');
    let [dateEventNotDefined, setDateEventNotDefined] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();   
        let subject = 'Olá, gostaria de um novo orçamento !';
        let text = `Nome: ${name}\nData do evento: ${dateEvent}\nEmail: ${email}\nMensagem: ${message}`;
        let res = await axios.post('/api/sendEmail', { subject, text });
        console.log(res);
    };

    return(
        <div>
            <div className="text-center p-3">
                <h3>Meu Casamento Eternizado</h3>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome:
                            <input 
                                className="form-control mb-3"
                                type="text"
                                placeholder="Insira seu nome aqui"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Data do seu casamento:
                            <input 
                                className="form-control mb-3"
                                type="date"
                                value={dateEvent}
                                onChange={(e) => setDateEvent(e.target.value)}
                                disabled={dateEventNotDefined}
                                required
                            />
                        </label>
                        <label>
                            <input 
                                    className="mb-3"
                                    type="checkbox"
                                    onChange={(e) => { setDateEventNotDefined(e.target.checked); setDateEvent(''); }}
                                />
                            Ainda não definido                            
                        </label>
                        <label>
                            Email:
                            <input
                                className="form-control mb-3"
                                type="email"
                                placeholder="Insira seu email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Mensagem:                            
                            <textarea
                                className="form-control mb-3"
                                placeholder="Insira sua mensagem aqui"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </label>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}