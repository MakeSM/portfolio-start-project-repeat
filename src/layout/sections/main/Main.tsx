import React from 'react';
import { styled } from 'styled-components';
import photoWebp from '../../../assets/images/myPhoto1.webp';
import photoJpg from '../../../assets/images/myPhoto.jpeg';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
   return (
      <StyledMain>
         <FlexWrapper align={'center'} justify={'space-around'}>
            <MainTextWrapper>
               <MainGreetings>Hi There</MainGreetings>
               <MainName>I am Daniil Romadanov</MainName>
               <MainTitle>A Web Developer.</MainTitle>
            </MainTextWrapper>
            <MainPhoto src={photoJpg} alt="My Photo" />
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledMain = styled.div`
min-height: 100vh;
background-color: #8484ec;
`

const MainPhoto = styled.img`
   width: 350px;
   height: 430px;
   object-fit: cover;
`;

const MainTextWrapper = styled.div`
	
`

const MainTitle = styled.h1`
	
`;

const MainName = styled.h2`

`;

const MainGreetings = styled.span`
	
`