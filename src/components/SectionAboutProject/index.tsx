import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageURL } from 'utils/getImageURL'

const SectionAboutProject = ({
  title,
  image,
  description
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageURL(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />

        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
