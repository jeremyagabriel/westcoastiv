/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { forwardRef } from 'react';


export const FlexCol = forwardRef(({
  sx,
  children,
  ...props
}, ref) => {

  return (
    <Box
      data-comp={FlexCol.displayName}
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      { children }
    </Box>
  );
});

FlexCol.displayName = 'FlexCol';