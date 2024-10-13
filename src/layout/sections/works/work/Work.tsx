import React from 'react';
import { styled } from 'styled-components';

type WorkPropsType = {
   title: string;
   text: string;
	src: string;
};

export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <ImageWork src={props.src} alt="" />
         <TitleWork>{props.title}</TitleWork>
         <TextWork>{props.text}</TextWork>
         <LinkWork href={'#'}>demo</LinkWork>
         <LinkWork href={'#'}>code</LinkWork>
      </StyledWork>
   );
};

const StyledWork = styled.div`
background-color: yellow;
max-width: 540px;
width: 100%;
`;
const ImageWork = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`;
const TitleWork = styled.h3`

`;
const TextWork = styled.p`

`;
const LinkWork = styled.a`

`;
