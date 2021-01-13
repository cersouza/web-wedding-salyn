import Image from 'next/image';
import { useRouter } from 'next/router';
import PageDivider from '../components/pageDivider';

export default function Home() {
    const { typeGuest } = useRouter().query;
    const isPadrinho = typeGuest && typeGuest == 'padrinhos'; 
    const urlConfirmarPresenca = process.env.URL_CONFIRMAR_PRESENCA || '';

    return(
        <div>
            <div className="bg-tranparent-dark" id="inicio">
                <div className="row">
                    <div className="col-md-12 position-absolute top-50 start-50 translate-middle">
                        <div className="container">
                            <p className="text-center text-light">10 de julho de 2021, às 16h</p>
                            <h1 className="title text-center text-light">Evelyn e Samuel</h1>
                            <div className="container d-md-flex justify-content-center text-center">                                
                                { isPadrinho ?
                                    <a href="#manual-padrinhos"><button className="btn-line-white">Manual dos Padrinhos</button></a>
                                    :
                                    urlConfirmarPresenca && <a href={urlConfirmarPresenca} target="_blank"><button className="btn-line-white">Confirmar Presença</button></a>
                                }                             

                                <a href="#informacoes-cerimonia"><button className="btn-line-white">Informações Cerimônia</button></a>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="bg-light">
                <div id="informacoes-cerimonia">
                    <div className="row m-0">
                        <div className="col-md-12 p-5 text-center">
                            <h1>Cerimônia</h1>
                            <p><strong>Local:</strong> Acampamento Recanto do Sal: Rua soldado constitucionalista, Bairro fazenda velha – Nova Odessa.</p>
                            <iframe
                                className="rounded"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8382380006587!2d-47.352824385377204!3d-22.80845708506187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c899d1d9c5dcd7%3A0x4401534e300daa6d!2sChacara%20Recanto%20Solar!5e0!3m2!1spt-BR!2sbr!4v1610421797745!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="450" />
                        </div>
                        <PageDivider />
                    </div>
                </div>  
                { isPadrinho && 
                    <div id="manual-padrinhos">
                        <div className="row m-0">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-5"> Padrinhos - Inspiração</h1>
                                <p>Calça e colete cinza, camisa branca e gravata marsala (da cor do vestido da madrinha) e sapato preto.
                                </p>
                                <Image
                                    src="/assets/img/inspiracao-padrinhos.jpg"
                                    alt="Inspiração para Padrinhos"
                                    width={'auto'}
                                    height={400}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <PageDivider />
                    </div>  
                }

            </main>
            
            <footer className="p-2 text-center">
                <p>E&S © 2021</p>
            </footer>
        </div>
    );
}