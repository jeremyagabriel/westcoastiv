/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { forwardRef } from 'react';


export const Flex = forwardRef(({
  sx,
  children,
  ...props
}, ref) => {

  return (
    <Box
      data-comp={Flex.displayName}
      ref={ref}
      sx={{
        display: 'flex',
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      { children }
    </Box>
  );
});

Flex.displayName = 'Flex';