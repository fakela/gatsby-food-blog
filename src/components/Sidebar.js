import React from 'react'
import { css } from '@emotion/core'

const Sidebar = props => (
    <div
      css={css`
        border: 2px solid #e6e6e6;
        maxWidth: 960;
        padding: 0.5rem;
        marginBottom: 25px;
      `}
    >
      <strong>{props.title}.</strong> {props.description}
    </div>
  );
  export default Sidebar;