import React from 'react';
import * as S from './styled'

// import { Container } from './styles';

function RepositoryItem({ name, linkToRepo, fullName, language }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>{fullName}</S.WrapperFullName>
      <S.WrapperLanguage>{language}</S.WrapperLanguage>
      <S.WrapperFooter>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">Detalhes</S.WrapperLink>
      </S.WrapperFooter>

    </S.Wrapper>
  );
}

export default RepositoryItem;