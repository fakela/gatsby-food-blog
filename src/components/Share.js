import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../../styles/theme'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

const ShareMedia = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
          margin-right: 18px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
        span {
          margin-right: 20px;
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.0;
          opacity: 0.9;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          border-top: 1px solid ${theme.colors.black};
        `}
      />
      <span>You could share this 😀</span>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        Twitter
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
        `}
      >
        Facebook
      </FacebookShareButton>
    </div>
  )
}

export default ShareMedia
