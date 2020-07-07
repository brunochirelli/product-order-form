import React from 'react';
import { Container, Typography, IconButton } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

const Footer = () => (
  <footer>
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="caption">
        Code & Design by{' '}
        <a href="https://github.com/brunochirelli/product-order-form">
          <b>Bruno Chirelli</b>
        </a>
      </Typography>
      <div>
        <IconButton color="primary" href="https://github.com/brunochirelli" rel="noopener noreferer" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton
          color="primary"
          edge="start"
          href="https://www.linkedin.com/in/brunochirelli/"
          rel="noopener noreferer"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
      </div>
    </Container>
  </footer>
);

export default Footer;
