import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@material-ui/core';
import { GitHub, Menu } from '@material-ui/icons';
import { IconButton } from 'gatsby-theme-material-ui';

const AppBarStyled = styled(AppBar)`
  background: ${({ theme }) => `linear-gradient(90deg,${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
`;

const Header = ({ siteTitle }) => {
  const theme = useTheme();

  return (
    <header>
      <AppBarStyled position="static" theme={theme} elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            {siteTitle}
          </Typography>
          <IconButton
            href="https://github.com/brunochirelli/product-order-form"
            edge="start"
            color="inherit"
            aria-label="menu"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
