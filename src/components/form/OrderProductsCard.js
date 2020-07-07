import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  Typography,
  useTheme,
  Button,
  CardActions,
} from '@material-ui/core';

const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  margin: 0.5rem auto;
  color: white;
  background: ${({ theme, value }) =>
    value === 'Integral' ? theme.palette.primary.main : theme.palette.secondary.main};
  opacity: ${({ formik, value }) => {
    if (formik.values.product === '') {
      return 1;
    }
    if (formik.values.product === value) {
      return 1;
    }
    return 0.5;
  }};
  transition: all 0.3s ease;
`;

const OrderProductsCard = ({ formik, value }) => {
  const theme = useTheme();
  return (
    <StyledCard theme={theme} value={value} formik={formik}>
      {/* <Box
        width="30%"
        minHeight="100px"
        style={{ objectFit: 'cover' }}
        component="img"
        src="https://images.unsplash.com/photo-1517683551739-7f3f08efba84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      /> */}
      <Box width="100%">
        <CardContent>
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Radio disabled={formik.isSubmitting} style={{ color: 'white' }} />}
              value={value}
              disabled={formik.isSubmitting}
            />
            <Typography body="body1" style={{ marginLeft: '-16px', fontWeight: '500' }}>
              {value.toUpperCase()}
            </Typography>
          </Box>
          <Typography variant="caption">Product description</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            disabled
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.75)', marginLeft: 'auto' }}
          >
            More
          </Button>
        </CardActions>
      </Box>
    </StyledCard>
  );
};

export default OrderProductsCard;
