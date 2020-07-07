import React from 'react';
import styled from 'styled-components';

import { Button } from 'gatsby-theme-material-ui';
import { Dialog, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import moment from 'moment';

const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    margin-bottom: 1rem;
  }

  .MuiTypography-body1 {
    font-weight: 700;
  }
`;

const DialogContentStyled = styled(DialogContent)`
  .product-color {
    color: ${({ theme, product }) =>
      product.toLowerCase() === 'integral' ? theme.palette.primary.main : theme.palette.secondary.main};
  }
`;
const Confirm = ({ values, submit, setConfirmShow, confirmShow, setSubmitting }) => {

  const handleClose = () => {
    setConfirmShow(false);
    setSubmitting(false);
  };
  return (
        <RowStyled>
          <Typography variant="body2">Event date:</Typography>
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
