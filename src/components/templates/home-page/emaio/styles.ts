import { makeStyles } from '@material-ui/core';
import { LIGTH_GRAY_COLOR, MEDDIUM_GRAY_COLOR } from '../../../../shared/theme';

const useEmaioHomeTemplateStyles = makeStyles({
  root: (props: any) => ({
    height: '95vh',
    backgroundSize: 'cover',
    backgroundColor: MEDDIUM_GRAY_COLOR,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${props.story.urlBackgroundImage})`,
    '& .MuiTypography-subtitle1': {
      color: MEDDIUM_GRAY_COLOR,
    },
    textAlign: 'center',
  }),
  backgroundTransparentDark: {
    height: '95vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '100vw',
    padding: '1rem',
  },
  avatar: {
    marginTop: '-5rem',
    height: '10rem',
    width: '10rem',
    border: '0.3rem solid #f8f9fa',
  },
  giftItem: {
  },
  rounded: {
    borderRadius: '0.5rem',
  },
  section: {
    padding: '1rem',
    marginBottom: '1rem',
  },
});

export default useEmaioHomeTemplateStyles;

