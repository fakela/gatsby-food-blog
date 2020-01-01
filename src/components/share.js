import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './theming'
import { Twitter, LinkedIn} from './social'


const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
          margin-right: 20px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
        span {
          margin-right: 20px;
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          border-top: 1px solid ${theme.colors.gray};
        `}
      />
      <span>Share article</span>
      
      <Twitter />
      <LinkedIn />
    </div>
  )
}

export default Share
