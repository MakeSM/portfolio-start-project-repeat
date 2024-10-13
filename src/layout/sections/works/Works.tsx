import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/social.png'
import timeImg from '../../../assets/images/time1.png'

const workItems = ['All', 'landing page', 'React', 'Spa'];

export const Works = () => {
   return (
      <StyledSectionWorks>
         <SectionTitle>{'My Works'}</SectionTitle>
         <Menu menuItems={workItems} />
			<FlexWrapper justify={'space-around'}>
				<Work title={'Social Network'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} src={socialImg}></Work>
				<Work title={'Timer'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'} src={timeImg}></Work>
			</FlexWrapper>
      </StyledSectionWorks>
   );
};

const StyledSectionWorks = styled.section`
   min-height: 100vh;
   background-color: #76ced4;
`;
