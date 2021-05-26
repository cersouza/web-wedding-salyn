import { Zoom } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';
import styles from './styles.module.css';

interface AlertToastProps {
  message?: string;
  type?:  Color;
  show?: boolean;
}

function AlertToast({ message, type, show}: AlertToastProps) {
  return (
    <Zoom in={show}>
      <Alert className={styles.alertContainer} variant="filled" severity={ type }>
        { message }
      </Alert>
    </Zoom>
  );
}

AlertToast.defaultProps = {
  message: "Operação realizada com sucesso !",
  type: "success",
  show: false,
};

export default AlertToast;
