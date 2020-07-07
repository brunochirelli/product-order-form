import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';

import { Container, Typography, Card, CardContent } from '@material-ui/core';

const Success = ({ location }) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    } else {
      setSuccess(location.state.success);
    }
  }, [location.state]);

  return (
    <>
      {location.state && success ? (
        <Container maxWidth="sm" style={{ marginTop: '1rem' }}>
          <Card>
            {console.log(location)}
            <CardContent>
              <Typography variant="h5" paragraph color="primary">
                Alright! Your order was submitted successfully
              </Typography>
              <Typography>Check the console for the success data.</Typography>
            </CardContent>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export default Success;
