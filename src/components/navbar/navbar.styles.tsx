import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/images/logo.svg';

export const NavbarContainer = styled.div`
  align-items: center;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  display: flex;
  padding: 0.6rem;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 2rem;
  margin-left: 3rem;
`;

export const NavbarLink = styled(Link)`
  --border-width: 1px;

  border: var(--border-width) solid var(--bg-color);
  color: var(--secondary-color);
  font-weight: bold;
  padding: .3rem 0;
  transition: opacity 300ms ;

  :hover {
    opacity: .8;
  }

  &.selected {
    color: var(--primary-color);
  }
`;

export const NavbarLogo = styled(Logo)`
  height: 5rem;
  width: 5rem;
`;
