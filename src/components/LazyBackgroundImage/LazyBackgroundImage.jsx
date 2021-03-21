/* eslint-disable max-lines */
/** @jsx jsx */
import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import { jsx, Box } from 'theme-ui';
import { useInView } from 'react-intersection-observer';


export const LazyBackgroundImage = ({
  src,
  sx,
  children,
  lazy = true,
  ...props
}) => {

  const [ isVisible, setIsVisible ] = useState(lazy ? false : true);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isVisible) setIsVisible(true);
  }, [inView]);

  const imageStyles = useMemo(() => {
    let styles;
    const base = {
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    if (lazy) {
      styles = {
        backgroundImage: isVisible
        ? `url(${src})`
        : null,
        ...base
      }
    } else {
      styles = {
        backgroundImage: `url(${src})`,
        ...base
      }
    }
    return styles;
  }, [inView, src]);

  return (
    <Box
      ref={ref}
      data-comp={LazyBackgroundImage.displayName}
      sx={{
        ...imageStyles,
        ...sx
      }}
      {...props}
    >
      { children }
    </Box>
  );
};

LazyBackgroundImage.displayName = 'LazyBackgroundImage';

LazyBackgroundImage.propTypes = {
  src: PropTypes.string,
  props: PropTypes.object,
  sx: PropTypes.object,
  lazy: PropTypes.bool,
};