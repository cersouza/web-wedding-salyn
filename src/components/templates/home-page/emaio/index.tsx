import { Box, Button, Card, CardActions, CardContent, Chip, Grid, Paper, Tooltip, Typography } from '@material-ui/core';
import { AttachMoney, ExpandMore, Favorite, Home, Launch, LocationOn } from '@material-ui/icons';
import Image from 'next/image';
import { useState } from 'react';
import Gift from '../../../../domain/Gift';
import Story from '../../../../domain/Story';
import { getLongDateFormat } from '../../../../shared/utils/functions';
import PageDivider from '../../../atoms/pageDivider';
import useEmaioHomeTemplateStyles from './styles';

interface HomeProps {
  story: Story,
}

const giftsToShowDefaultLimit = 8;

export default function EmaioHomeTemplate({ story }: HomeProps) {
  const styles = useEmaioHomeTemplateStyles({ story });
  const [giftsToShowLimit, setGiftsToShowLimit] = useState(giftsToShowDefaultLimit);

  const hasButtonsList = () => story.buttons.length > 0;

  const hasGiftsToShow = () => giftsToShowLimit < story.giftsList.length;

  const handleShowMoreGifts = () => {
    setGiftsToShowLimit(giftsToShowLimit + giftsToShowDefaultLimit);
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.root}
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={styles.backgroundTransparentDark}
      >
        <Grid item>
          <Typography variant='subtitle1'>
            {getLongDateFormat(story.event.dateTime)}
          </Typography>
        </Grid>
        <Grid item>
          <Image
            src={story.event.logo}
            width={500}
            height="auto"
            title={`${Story.getSpousesName(story)} logo`}
          />
        </Grid>
        {
          hasButtonsList() && (
            <Grid
              item
              container
              justify="center"
            >
              {
                story.buttons.map((button) => (
                  <Grid
                    item
                    md={4}
                    xs={8}
                    key={button.label}
                  >
                    <Box mb={2} ml={3}>
                      <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        href={button.redirectTo}
                        target={button.targetRedirect}
                      >
                        {button.label}
                      </Button>
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          )
        }
      </Grid>

      {
        story.event.message && (
          <Grid
            container
            justify="center"
            className={styles.section}
          >
            <Grid item xs={12}>
              <Box mb={2}>
                <Favorite style={{ fontSize: 50 }} />
              </Box>
            </Grid>
            <Grid item xs={10} md={6}>
              <Typography>
                {story.event.message}
              </Typography>
            </Grid>
          </Grid>
        )
      }

      <Grid container>
        <Grid item xs={12}>
          <PageDivider />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        justify="center"
        spacing={3}
        className={styles.section}
      >
        <Grid
          item
          xs={12}
          id="lista-de-presentes"
        >
          <Home style={{ fontSize: 40 }} />
          <Typography variant="h2">
            Lista de Presentes
          </Typography>
        </Grid>
        {
          story.giftsList.filter((gift) => !gift.given).slice(0, giftsToShowLimit).map((gift: Gift) => (
            <Grid
              item
              md={3}
              xs={12}
              key={gift._id}
            >
              <Card className={styles.giftItem}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    justify="center"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography >
                        {gift.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Image
                        width="120"
                        height="120"
                        objectFit="contain"
                        alt={gift.name}
                        title={gift.name}
                        src={gift.imageUrl}
                        className={styles.rounded}
                      />
                    </Grid>
                    <Grid item>
                      <Tooltip
                        arrow
                        placement="bottom"
                        title="Preço sugerido pelos noivos"
                      >
                        <Chip
                          color="primary"
                          icon={<AttachMoney />}
                          label={gift.price}
                        />
                      </Tooltip>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid container justify="center">
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        color="primary"
                        disableElevation
                        variant="outlined"
                        endIcon={<Launch />}

                        href={gift.giveGiftUrl}
                        target="_blank"
                      >
                        PRESENTEAR
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
        {
          hasGiftsToShow() && (
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                endIcon={<ExpandMore />}
                onClick={handleShowMoreGifts}
              >
                Mostrar mais presentes
              </Button>
            </Grid>
          )
        }
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <PageDivider />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={3}
        alignItems="center"
        className={styles.section}
      >
        <Grid item xs={12} id="informacoes-cerimonia">
          <LocationOn style={{ fontSize: 40 }} />
          <Typography variant="h2">
            Cerimônia religiosa
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Data e hora:</strong> {getLongDateFormat(story.event.dateTime)}
          </Typography>
          <Typography>
            <strong>Local:</strong> {story.event.address}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <iframe
            className={styles.rounded}
            src={story.event.iframeAddressUrl}
            width="80%"
            height="450"
          />
        </Grid>
      </Grid>

      <Grid item container>
        <Grid item xs={12}>
          <Box className="text-light text-center bg-dark">
            <Typography className="p-2">Meu Casamento Eternizado © 2021</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
