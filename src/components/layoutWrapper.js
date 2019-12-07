import React from 'react'
import { css } from '@emotion/core'


const LayoutWrapper = props => {
  const {
    maxWidth = 700,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...Props
  } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '40'}px;
       {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
      `}
      {...Props}
    >
      {props.children}
    </div>
  )
}

export default LayoutWrapper
