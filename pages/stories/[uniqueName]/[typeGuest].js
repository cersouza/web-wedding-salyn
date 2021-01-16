import Image from 'next/image';
import { useRouter } from 'next/router';
import PageDivider from '../../../components/pageDivider';
import Head from 'next/head';
import Event from '../../../services/Event';
import Error from 'next/error';

export default function Home() {
    const { typeGuest, uniqueName } = useRouter().query;

    if (!uniqueName || !typeGuest) 
        return null;

    const isPadrinho = typeGuest && typeGuest == 'padrinhos'; 
    const urlConfirmarPresenca = process.env.URL_CONFIRMAR_PRESENCA || '';
    const data = Event(uniqueName).get();    

    if(!data) {
        return <Error statusCode="404" />
    }

    const formatDate = (prmDate) => {
        let formattedDate = ``;
        let date = new Date(prmDate);
        let monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

        let day = date.getDate();
        let monthNumber = date.getMonth();
        let year = date.getFullYear();  
        let hours = date.getHours();      
        
        formattedDate = `${day} de ${monthNames[monthNumber]} de ${year}, às ${hours}h`;

        return formattedDate;
    }  

    const renderButtons = (button, i) => {
        if(button.redirectTo && (!button.filter || button.filter.includes(typeGuest)))
         return (
                <a href={button.redirectTo} key={`button-${i}`}>
                    <button className={`btn-${button.class}`} target={ button.targetRedirect || '_self' }>
                        {button.label}
                    </button>
                </a>
            )  
    }
    

    return (        
        <div>
            <Head>
                <link rel="shortcut icon" href="/assets/img/heart-icon.ico" />
                <title>{`${data.spousesName[0]} & ${data.spousesName[1]} - Meu Casamento`}</title>
            </Head>
            <div className="bg-tranparent-dark" id="inicio">
                <div className="row">
                    <div className="col-md-12 position-absolute top-50 start-50 translate-middle">
                        <div className="container">
                            <p className="text-center text-light">{ formatDate(data.event.dateTime) }</p>
                            <h1 className="title text-center text-light">{`${data.spousesName[0]} e ${data.spousesName[1]}`}</h1>
                            <div className="container d-md-flex justify-content-center text-center">                             
                               { data.buttons.map(renderButtons) }                               
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
                            <p>
                                <strong>Data:</strong> { formatDate(data.event.dateTime) }<br/>
                                <strong>Local:</strong> { data.event.address }
                            </p>
                            <iframe
                                className="rounded"
                                src={data.event.iframeAddressUrl}
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
            
            <footer className="text-light text-center bg-dark">
                <p className="p-2">Meu Casamento Eternizado © 2021</p>
            </footer>
        </div>
    );
}