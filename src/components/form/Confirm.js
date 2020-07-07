import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import { Dialog, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import moment from 'moment';

const Confirm = ({ values, submit, setConfirmShow, confirmShow, setSubmitting }) => {
  const handleClose = () => {
    setConfirmShow(false);
    setSubmitting(false);
  };
  return (
    <Dialog onClose={handleClose} open={confirmShow} fullWidth>
      <Card>
        <CardContent>
          <Typography variant="h5">Revise seu pedido</Typography>
          <Typography>Nome: {values.name}</Typography>
          <Typography>Telefone: {values.phone}</Typography>
          <Typography>Produto: {values.product}</Typography>
          <Typography>Quantidade: {values.quantity}</Typography>
          {values.street ? (
            <Typography>
              Endereço: {values.street}, {values.number} - {values.neighbor}
            </Typography>
          ) : (
            <Typography>Retirada</Typography>
          )}
          <Typography>Data do evento: {values.date.format('L')}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={submit}>
            Confirmar pedido
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Alterar
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default Confirm;
