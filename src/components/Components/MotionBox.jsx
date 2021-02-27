/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Component = motion.custom(Box);

export const MotionBox = memo(({
  children,
  initial = 'hidden',
  animate,
  variants = {},
  animateOnLoad = false,
  threshold = 1,
  ...props
}) => {

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <Component
      ref={ref}
      data-comp={MotionBox.displayName}
      initial={initial}
      animate={ animateOnLoad
        ? inView
          ? 'visible'
          : 'hidden'
        : animate
      }
      variants={ variants === 'default'
        ? defaultVariant
        : variants
      }
      {...props}
    >
      { children }
    </Component>
  );
})

const defaultVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
};

MotionBox.displayName = 'MotionBox';