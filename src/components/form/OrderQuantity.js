import React from 'react';
import { Grid, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Field } from 'formik';
import { Select } from 'formik-material-ui';

const OrderQuantity = () => (
  <Grid item xs={6}>
    <FormControl fullWidth>
      <InputLabel htmlFor="age-simple">Quantity</InputLabel>
      <Field component={Select} name="quantity">
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={200}>200</MenuItem>
        <MenuItem value={300}>300</MenuItem>
        <MenuItem value={400}>400</MenuItem>
        <MenuItem value={500}>500</MenuItem>
        <MenuItem value={600}>600</MenuItem>
        <MenuItem value={700}>700</MenuItem>
        <MenuItem value={800}>800</MenuItem>
        <MenuItem value={900}>900</MenuItem>
        <MenuItem value={1000}>1000</MenuItem>
      </Field>
    </FormControl>
  </Grid>
);

export default OrderQuantity;
