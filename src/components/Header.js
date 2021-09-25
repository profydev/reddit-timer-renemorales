import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
`;

export const Nav = styled.header`
  background: red;
`;

export const ListItem = styled.nav``;

export const listItem = styled.li``;

export const NavLinks = styled.ul``;

export const StyledLink = styled(Link)``;

function Header() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <ListItem>
          <StyledLink to="/searchpage/javascript">Search</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="#how-it-works">How it works</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="#about">About</StyledLink>
        </ListItem>
      </Nav>
    </Container>
  );
}

export default Header;
