import React from 'react';
import styled from 'styled-components';

import { Button } from 'gatsby-theme-material-ui';
import { Dialog, Typography, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
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
  const theme = useTheme();

  const handleClose = () => {
    setConfirmShow(false);
    setSubmitting(false);
  };
  return (
    <Dialog onClose={handleClose} open={confirmShow} scroll="body" maxWidth="sm" fullWidth>
      <DialogTitle disableTypography>
        <Typography variant="h5">Check your order</Typography>
      </DialogTitle>

      <DialogContentStyled theme={theme} product={values.product}>
        <Typography className="product-color" variant="h6">
          {values.product}
        </Typography>
        <Typography className="product-color" style={{ marginBottom: '1rem' }}>
          Product description
        </Typography>

        <Typography variant="h6" gutterBottom>
          {values.name}
        </Typography>

        <RowStyled>
          <Typography variant="body2">Event date:</Typography>
          <Typography variant="body1">{values.date.format('L')}</Typography>
        </RowStyled>
        <RowStyled>
          <Typography variant="body2">Quantity:</Typography>
          <Typography variant="body1">{values.quantity}</Typography>
        </RowStyled>
        <RowStyled>
          <Typography variant="body2">Contact phone:</Typography>
          <Typography variant="body1">{values.phone}</Typography>
        </RowStyled>

        {values.street ? (
          <>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography>
              {values.street} {values.number} - {values.neighbor}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Pick up in store
            </Typography>
            <Typography>You can pick up in the nearest store.</Typography>
          </>
        )}
      </DialogContentStyled>

      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          onClick={submit}
          style={{
            flexGrow: 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
          }}
        >
          Order now
        </Button>
        <Button variant="outlined" color="secondary" size="large" onClick={handleClose}>
          Change
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
