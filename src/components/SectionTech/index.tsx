import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { SectionTechProps } from 'types/api'

import * as S from './styles'
import { getImageURL } from 'utils/getImageURL'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ icon, title }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageURL(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
