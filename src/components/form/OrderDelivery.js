import React from 'react';
import styled from 'styled-components';

import { Grid, Box, Typography, Tabs, Tab } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const TabStyled = styled(Tab)`
  color: grey;
  background: #94949424;

  &.Mui-selected {
    background: white !important;
  }
`;

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      item
      container
      spacing={2}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Grid>
  );
}

const OrderDelivery = ({ formik, tabValue, setTabValue }) => {
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Tabs
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label={`tab-${tabValue}`}
        variant="fullWidth"
      >
        <TabStyled label="Delivery" {...a11yProps(0)} disabled={formik.isSubmitting} />
        <TabStyled label="Pick up" {...a11yProps(1)} disabled={formik.isSubmitting} />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid item xs={8}>
          <Field
            component={TextField}
            error={formik.errors.street && formik.touched.street}
            name="street"
            type="text"
            label="Street"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Field
            component={TextField}
            error={formik.errors.number && formik.touched.number}
            name="number"
            type="number"
            label="Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            error={formik.errors.neighbor && formik.touched.neighbor}
            name="neighbor"
            type="text"
            label="District"
            fullWidth
          />
        </Grid>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Grid item xs={12}>
          <Box marginTop={3}>
            <Typography>You can pick your orders in store</Typography>
          </Box>
        </Grid>
      </TabPanel>
    </Grid>
  );
};
export default OrderDelivery;
