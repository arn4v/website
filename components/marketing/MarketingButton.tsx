import { Box, styled } from '@modulz/design-system';
import React from 'react';

export const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$6',
  px: '$3',
  fontFamily: '$untitled',
  fontWeight: 500,
  borderRadius: '$2',
  fontSize: '$3',
  lineHeight: '$sizes$6',

  '&:disabled': {
    bc: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  '&[href]': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      gray: {
        bc: '$slateA3',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            bc: '$slateA4',
          },
        },
        '&:active': {
          bc: '$slateA5',
        },
        '&:focus-visible': {
          bc: '$tealA3',
          boxShadow: '0 0 0 2px $colors$teal9',
        },
      },
      contrast: {
        bc: '$hiContrast',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            bc: '$teal12',
          },
        },
        '&:active': {
          bc: '$teal4',
          color: '$teal12',
        },
        '&:focus-visible': {
          boxShadow: '0 0 0 2px $colors$teal9',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});

type MarketingButtonProps = {
  as: any;
  icon?: React.ComponentType<any>;
} & React.ComponentProps<typeof StyledButton>;

export const MarketingButton = React.forwardRef<HTMLButtonElement, MarketingButtonProps>(
  ({ children, icon: Icon, ...props }, forwardedRef) => {
    return (
      <StyledButton ref={forwardedRef} {...props}>
        {children}
        {Icon && (
          <Box as="span" css={{ ml: 8, mr: -3 }}>
            <Icon />
          </Box>
        )}
      </StyledButton>
    );
  }
);
