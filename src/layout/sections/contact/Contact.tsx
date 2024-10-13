import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Btn } from '../../../components/Btn';

export const Contact = () => {
   return (
      <StyledContact>
         <SectionTitle>Contact</SectionTitle>
			<StyledForm>
				<Field placeholder={'name'}></Field>
				<Field placeholder={'sobject'}></Field>
				<Field placeholder={'message'} as={'textarea'}></Field>
				<Btn type={'submit'}>Send message</Btn>
			</StyledForm>


      </StyledContact>
   );
};

const StyledContact = styled.div`
	min-height: 50vh;
	background-color: #d49eec;
`;

const StyledForm = styled.form`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 0 auto;
`;

const Field = styled.input``;
