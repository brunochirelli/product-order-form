import React from 'react';
import { Grid, Card, Box, CardContent, FormControlLabel, Radio, Typography, FormHelperText } from '@material-ui/core';
import { Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';
import OrderProductsCard from './OrderProductsCard';

const OrderProducts = ({ formik }) => (
  <Grid item xs={12} container>
    <Field component={RadioGroup} name="product" style={{ width: '100%' }}>
      <OrderProductsCard formik={formik} value="Integral" />
      <OrderProductsCard formik={formik} value="Light" />
    </Field>
    {formik.errors.product ? (
      <Grid item xs={12}>
        <FormHelperText error>{formik.errors.product}</FormHelperText>
      </Grid>
    ) : null}
  </Grid>
);

export default OrderProducts;
