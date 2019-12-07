import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { useTheme } from '../../styles/theme';
import { rgba, darken } from 'polished';

const Buttons = ({ to, children, secondary, ...Props }) => {
    const theme = useTheme()
    const styles = css({
        display: 'inline-flex',
        border: 'none',
        borderRadius: '4px',
        background: secondary  ? rgba(theme.colors.primary, 0.5)  : theme.colors.primary,
        color: secondary ? theme.colors.primary : theme.colors.white,
        padding: '10px 10px',
        cursor: 'pointer',
        transition: 'all 150ms ease',
        '@media (hover: hover)': {
          ':hover': {
            color: theme.colors.white,
            background: darken(0.5, theme.colors.primary),
          },
        },
    })

  return to ? (
    <Link to={to} css={styles} {...Props}>{children}</Link>
  ) : (
    <Button css={styles} {...Props}>{children}</Button>
  )}

  export default Button;