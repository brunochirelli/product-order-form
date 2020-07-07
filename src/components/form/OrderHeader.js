import React from 'react';
import { Typography } from '@material-ui/core';

const OrderHeader = () => (
  <>
    <Typography variant="h4" paragraph>
      Choose your product
    </Typography>
    <Typography variant="body1">Fill the form with the order infos.</Typography>
    <br />
    <Typography variant="body2">Start by choosing the version. Click to know more.</Typography>
  </>
);

export default OrderHeader;
