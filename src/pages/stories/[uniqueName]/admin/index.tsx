import { Box, Button, CircularProgress, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GetStoryDetail from '../../../../app/use-cases/GetStoryDetailUseCase';
import GetTopStories from '../../../../app/use-cases/GetTopStoriesUseCase';
import AlertToast from '../../../../components/molecules/alert';
import PageDivider from '../../../../components/pageDivider';
import Story from '../../../../domain/Story';
import { sortListByName } from '../../../../shared/utils/functions';
import styles from './styles.module.css';

interface HomeProps {
  data: Story,
}

let checkedGiftsId = [];

export default function Home({ data }: HomeProps) {
  const { query, isFallback } = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (isFallback) {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={styles.loadingContainer}
      >
        <Grid item xs={12}>
          <CircularProgress color="inherit" />
          <p>Carregando...</p>
        </Grid>
      </Grid>
    );
  }

  useEffect(() => {
    data.giftsList.forEach(({ _id, given }) => {
      if (given) {
        checkedGiftsId.push(_id);
      }
    });
  }, [data]);

  useEffect(() => {
    if (errorMessage) {
      handleShowAlert();
    }
  }, [errorMessage]);

  const handleShowAlert = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const handleGiftClick = (id: string) => {
    const giftIsChecked = checkedGiftsId.includes(id);

    if (giftIsChecked) {
      const giftIdx = checkedGiftsId.indexOf(id);
      checkedGiftsId.splice(giftIdx, 1);
    } else {
      checkedGiftsId.push(id)
    }

    console.log(checkedGiftsId);
  };

  const updateStory = async () => {
    try {
      setLoading(true);

      data.giftsList.forEach((gift) => {
        gift.given = checkedGiftsId.includes(gift._id);
        return gift;
      });

      await axios.put(`/api/stories/${data.uniqueName}`, {
        uniqueName: data.uniqueName,
        updates: data,
      });

      handleShowAlert();
    } catch (err) {
      setErrorMessage('Ocorreu um erro ao salvar, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/assets/img/heart-icon.ico" />
        <title>{`Editar Evento - Meu Casamento`}</title>
      </Head>

      <main className="bg-light">
        <div id="lista-de-presentes">
          <div className="row m-0 pt-4">
            <div className="col-md-12 text-center">
              <h1>Lista de Presentes</h1>
              <p>Selecione os presentes que você já ganhou, e depois clique em <strong>salvar:</strong></p>
              {
                loading
                  ? (
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className={styles.loadingContainer}
                    >
                      <Grid item xs={12}>
                        <CircularProgress color="inherit" />
                        <p>Carregando...</p>
                      </Grid>
                    </Grid>
                  )
                  : (
                    <ul className="list">
                      {
                        data.giftsList?.sort(sortListByName).map(({ _id, name, given }) => (
                          <li key={name}>
                            <label>
                              <input
                                type="checkbox"
                                defaultChecked={given}
                                onChange={() => handleGiftClick(_id)}
                              />
                              <span>{name}</span>
                            </label>
                          </li>
                        ))
                      }
                      <Button variant="outlined" fullWidth disableElevation onClick={updateStory}><strong>SALVAR</strong></Button>
                    </ul>
                  )
              }
            </div>
            <PageDivider />
          </div>
        </div>

        <AlertToast message={errorMessage || 'Alterações salvas com sucesso !'} type={errorMessage ? 'error' : 'success'} show={showAlert} />
      </main>

      <footer className="text-light text-center bg-dark">
        <p className="p-2">Meu Casamento Eternizado © 2021</p>
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getTopStories = new GetTopStories();
  const events = await getTopStories.execute();

  const eventsUniqueNames = events.map(uniqueName => ({
    params: {
      uniqueName,
    }
  }));

  return {
    paths: eventsUniqueNames,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { uniqueName } = context.params as { uniqueName: string };

  const getStoryDetail = new GetStoryDetail();
  const data = await getStoryDetail.execute({ uniqueName });

  return {
    props: { data },
    revalidate: 60,
  }
}
