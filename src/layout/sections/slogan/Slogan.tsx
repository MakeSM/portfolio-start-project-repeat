import React from 'react'
import { styled } from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { Btn } from '../../../components/Btn';

export const Slogan = () => {
  return (
	 <StyledSlogan>
		<SectionTitle>I Am Available For Freelance</SectionTitle>
		<Btn>Hire me</Btn>
	 </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
	min-height: 30vh;
	background-color: #e7839c;
`;