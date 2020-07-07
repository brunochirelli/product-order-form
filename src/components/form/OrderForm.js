import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

// material-ui
import { Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Button } from 'gatsby-theme-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';

// moment
import MomentUtils from '@date-io/moment';
import moment from 'moment';

// order components
import Confirm from './Confirm';
import OrderDelivery from './OrderDelivery';
import OrderProducts from './OrderProducts';
import OrderQuantity from './OrderQuantity';
import OrderDate from './OrderDate';
import OrderHeader from './OrderHeader';

// netlify form encode
const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

// phone regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// styles
const StyledButton = styled(Button)`
  width: 175px;
  color: white;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`;

const OrderForm = () => {
  const [price, setPrice] = useState(50);
  const [tabValue, setTabValue] = useState(0);
  const [confirmShow, setConfirmShow] = useState(false);

  const theme = useTheme();

  const validate = values => {
    const errors = {};

    // Address
    if (!values.street && tabValue === 0) {
      errors.street = 'Insira um endereço válido';
    }
    if (!values.number && tabValue === 0) {
      errors.number = 'Insira o número';
    }
    if (!values.neighbor && tabValue === 0) {
      errors.neighbor = 'Insira o bairro';
    }

    // Quantity
    if (values.quantity >= 100 && values.quantity < 200) {
      setPrice(50);
    } else if (values.quantity >= 200 && values.quantity < 400) {
      setPrice(100);
    } else if (values.quantity >= 400 && values.quantity < 600) {
      setPrice(150);
    } else if (values.quantity >= 600 && values.quantity < 800) {
      setPrice(200);
    } else if (values.quantity >= 800 && values.quantity < 1000) {
      setPrice(300);
    } else if (values.quantity === 1000) {
      setPrice(350);
    }

    return errors;
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Formik
          initialValues={{
            name: '',
            product: '',
            street: '',
            number: '',
            neighbor: '',
            quantity: 100,
            pick: !!tabValue,
            phone: '',
            date: moment().add(2, 'days'),
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            product: Yup.string().required('Choose your version'),
            street: Yup.string(),
            number: Yup.string(),
            neighbor: Yup.string(),
            date: Yup.string().required('Choose a date'),
            phone: Yup.string()
              .required('Phone is required')
              .matches(phoneRegExp, 'Invalid phone format'),
            pick: Yup.bool(),
          })}
          validate={validate}
          onSubmit={(values, actions) => {
            values.pick = !!tabValue;

            if (!confirmShow) {
              setConfirmShow(true);
            } else {
              values.date = values.date.format('L');

              // for testing purposes //
              console.log('success...', values);
              actions.resetForm();
              setConfirmShow(false);
              navigate('/success', {
                state: { success: true },
              });
              // ------------------- //

              /*
               * NETLIFY FORMS SETUP
               * ******************* */
              // fetch('/', {
              //   method: 'POST',
              //   headers: {
              //     'Content-Type': 'application/x-www-form-urlencoded',
              //   },
              //   body: encode({ 'form-name': document.querySelector('form').getAttribute('name'), ...values }),
              // })
              //   .then(() => {
              //     actions.resetForm();
              //   })
              //   .catch(() => {
              //     alert('Something went wrong with your request');
              //   })
              //   .finally(() => {
              //     actions.setSubmitting(false);
              //     setConfirmShow(false);
              //   });
            }
          }}
        >
          {formik => (
            <Form name="Orders" data-netlify="true">
              <Card>
                <CardContent>
                  {/* Header */}
                  <OrderHeader />

                  <Grid container spacing={2}>
                    {/* Products */}
                    <OrderProducts formik={formik} />

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Phone */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="phone" type="number" label="Phone" />
                    </Grid>

                    {/* Quantity */}
                    <OrderQuantity />

                    {/* Date */}
                    <OrderDate moment={moment} />

                    {/* Address */}
                    <OrderDelivery setTabValue={setTabValue} tabValue={tabValue} formik={formik} />
                  </Grid>
                </CardContent>
                <CardActions
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px' }}
                >
                  <Typography variant="body1" color="primary" style={{ fontWeight: '700' }}>
                    R$ {price}
                  </Typography>
                  <StyledButton theme={theme} disabled={formik.isSubmitting} onClick={formik.submitForm} size="large">
                    Submit Order
                  </StyledButton>
                </CardActions>
              </Card>
              {confirmShow && formik.isValid ? (
                <Confirm
                  submit={formik.submitForm}
                  values={formik.values}
                  setConfirmShow={setConfirmShow}
                  setSubmitting={formik.setSubmitting}
                  confirmShow={confirmShow}
                />
              ) : null}
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default OrderForm;
