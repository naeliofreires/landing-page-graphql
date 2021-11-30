import React from 'react'
import { LogoProps } from 'types/api'
import { getIageURL } from 'utils/getImageURL'

import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getIageURL(url)} alt={alternativeText} />
)

export default Logo
