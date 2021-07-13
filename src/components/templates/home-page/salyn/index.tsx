import Head from 'next/head';
import Error from 'next/error';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Story from '../../../../domain/Story';
import { sortListByName } from '../../../../shared/utils/functions';
import PageDivider from '../../../atoms/pageDivider';
import Button from '../../../../domain/Button';

interface HomeProps {
  story: Story,
}

let checkedGiftsId = [];

export default function SalynHomeTemplate({ story }: HomeProps) {
  const { query, isFallback } = useRouter();
  const { typeGuest } = query;

  if (isFallback) {
    return (
      <div>
        Carregando...
      </div>
    );
  }

  const isPadrinho = typeGuest && typeGuest == 'padrinhos';


  if (!story) {
    return <Error statusCode={404} />
  }

  const formatDate = (prmDate: string): string => {
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

  const renderButtons = (button: Button, i: number): React.ReactNode => {
    if (button.redirectTo && (!button.filter || button.filter.includes(typeGuest as string)))
      return (
        <a href={button.redirectTo} key={`button-${i}`} target={button.targetRedirect || '_self'}>
          <button className={`btn-${button.class} button-label`}>
            {button.label}
          </button>
        </a>
      )
  }

  const renderColorsPallete = (colors: string[]): React.ReactNode => {
    return (
      <div className="pt-3 pb-3 d-flex align-items-center justify-content-center">
        {colors.map((color, i) => <div key={`color-${i}`} style={{ height: '100px', width: '120px', backgroundColor: color, borderRadius: '5px', margin: '0 7px' }}></div>)}
      </div>
    );
  };

  const handleGiftListClick = (giftName: string) => {
    const message = encodeURI(`Olá, tudo bem ? Gostaria de dar um(a) ${giftName} para vocês !`);
    window.open(`https://wa.me/${story.telephoneNumber}?text=${message}`);
  };

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/assets/img/heart-icon.ico" />
        <title>{`${story.spousesName[0]} & ${story.spousesName[1]} - Meu Casamento`}</title>
      </Head>
      <div id="inicio" style={{ backgroundImage: `url(${story.urlBackgroundImage})`, backgroundColor: '#f8f9fa', height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="bg-tranparent-dark">
          <div className="row">
            <div className="col-md-12 position-absolute top-50 start-50 translate-middle">
              <div className="container">
                <p className="text-center text-light">{formatDate(story.event.dateTime)}</p>
                <h1 className="title text-center text-light">{`${story.spousesName[0]} e ${story.spousesName[1]}`}</h1>
                <div className="container d-md-flex justify-content-center text-center">
                  {story.buttons.map(renderButtons)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-light">
        {isPadrinho &&
          <div id="manual-padrinhos">
            <div className="row m-0 pt-4">
              <div className="col-md-12 text-center">
                <h1>Mães</h1>
                <p>Sugerimos essa paleta de <strong>tons de rosé</strong> para seu vestido:</p>
                {renderColorsPallete(['#bc6066', '#d18a8d', '#ef979e', '#f6bbc8'])}
                <p>Você vai ficar linda!</p>
              </div>
            </div>

            <PageDivider />|

            <div className="row m-0">
              <div className="col-md-12 text-center">
                <h1>Pais</h1>
                <p><strong>Inspiração:</strong> Terno Slim preto, camisa branca, sapato preto e gravata prata</p>
                <Image
                  src="/assets/img/inspiracao-pais.jpg"
                  alt="Inspiração Pais"
                  width={270}
                  height={535}
                  className="rounded"
                />
              </div>
            </div>

            <PageDivider />

            <div className="row m-0">
              <div className="col-md-12 text-center">
                <h1>Madrinhas</h1>
                <p>Sugerimos essa paleta de <strong>tons de marsala</strong> para seu vestido:</p>
                {renderColorsPallete(['#46010f', '#5a0013', '#76001a', '#8b0520'])}
                <p>Você vai ficar linda!</p>
              </div>
            </div>

            <PageDivider />|

            <div className="row m-0">
              <div className="col-md-12 text-center">
                <h1>Padrinhos</h1>
                <p><strong>Inspiração:</strong> Calça e colete cinza, camisa branca e gravata marsala (da cor do vestido da madrinha) e sapato preto.
                </p>
                <Image
                  src="/assets/img/inspiracao-padrinhos.jpg"
                  alt="Inspiração para Padrinhos"
                  width={270}
                  height={363}
                  className="rounded"
                />
              </div>
            </div>

            <PageDivider />|

            <div className="row m-0">
              <div className="col-md-12 text-center">
                <h1>Pagens</h1>
                <p><strong>Inspiração:</strong> Calça cinza, suspensório, camisa branca e gravata borboleta
                </p>
                <Image
                  src="/assets/img/inspiracao-pagens.jpg"
                  alt="Inspiração para Pagens"
                  width={270}
                  height={405}
                  className="rounded"
                />
              </div>
            </div>

            <PageDivider />|

          </div>


        }

        <div id="informacoes-cerimonia">
          <div className="row m-0 pt-4">
            <div className="col-md-12 text-center">
              <h1>Cerimônia</h1>
              <p>
                <strong>Data:</strong> {formatDate(story.event.dateTime)}<br />
                <strong>Local:</strong> {story.event.address}
              </p>
              <iframe
                className="rounded"
                src={story.event.iframeAddressUrl}
                width="100%"
                height="450" />
            </div>
            <PageDivider />
          </div>
        </div>

        <div id="lista-de-presentes">
          <div className="row m-0 pt-4">
            <div className="col-md-12 text-center">
              <h1>Lista de Presentes</h1>
              <p>Entre em contato com os noivos <strong>clicando no presente</strong> que você gostaria de doar:</p>
              <ul className="list">
                {
                  story.giftsList
                    .filter(({ given }) => !given)
                    .sort(sortListByName)
                    .map(({ name }) => (
                      <li>
                        <a href="javascript:void(0)" onClick={() => handleGiftListClick(name)} >{name}</a>
                      </li>
                    ))
                }
              </ul>
            </div>
            <PageDivider />
          </div>
        </div>

      </main>

      <footer className="text-light text-center bg-dark">
        <p className="p-2">Meu Casamento Eternizado © 2021</p>
      </footer>
    </div>
  );
}
