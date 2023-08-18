import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0px -5px 5px -5px rgba(45, 80, 106, 0.6) inset;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  color: #4c4c51;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #74b6e999;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #4c4c51;
  text-transform: uppercase;
`;
