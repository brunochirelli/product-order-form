import React from 'react';
import { Grid } from '@material-ui/core';
import { Field } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';

const OrderDate = ({ moment }) => (
  <Grid item xs={6}>
    <Field
      component={DatePicker}
      name="date"
      format="L"
      label="Event Date"
      disablePast
      initialFocusedDate={moment().add(2, 'days')}
      minDate={moment().add(2, 'days')}
      maxDate={moment()
        .add(30, 'days')
        .format()}
    />
  </Grid>
);

export default OrderDate;
