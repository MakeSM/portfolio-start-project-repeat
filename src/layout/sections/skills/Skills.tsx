import React from 'react';
import { styled } from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
   return (
      <StyledSectionSkills>
         <SectionTitle>My Skills</SectionTitle>
         <FlexWrapper wrap={'wrap'} justify={'space-between'}>
            <Skill
               iconId={'codeSvg'}
               title={'html5'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
            <Skill
               iconId={'cssSvg'}
               title={'css3'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
            <Skill
               iconId={'reactSvg'}
               title={'react'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
            <Skill
               iconId={'typescriptSvg'}
               title={'typescript'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
            <Skill
               iconId={'scSvg'}
               title={'styled components'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
            <Skill
               iconId={'figmaSvg'}
               title={'web design'}
               description={
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
               }
            />
         </FlexWrapper>
      </StyledSectionSkills>
   );
};

const StyledSectionSkills = styled.section`
   background-color: #252527;
   min-height: 100vh;
`;
