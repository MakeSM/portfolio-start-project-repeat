import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';


const navItems = ['Home', 'Skill', 'Works', 'Testimony', 'Contact']


export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         <Menu menuItems={navItems}/>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: #1F1F20;
	display: flex;
	justify-content: space-between;
`;
