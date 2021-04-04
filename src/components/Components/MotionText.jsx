/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Component = motion.custom(Text);

export const MotionText = memo(({
  children,
  text,
  initial = 'hidden',
  animate,
  variants = {},
  animateOnLoad = false,
  triggerOnce = true,
  threshold = 1,
  delay,
  initialY = 50,
  duration = 0.8,
  ...props
}) => {

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <Component
      ref={ref}
      data-comp={MotionText.displayName}
      initial={initial}
      animate={ animateOnLoad
        ? inView
          ? 'visible'
          : 'hidden'
        : animate
      }
      variants={ variants === 'default'
        ? defaultVariant(delay, initialY, duration)
        : variants
      }
      {...props}
    >
      { text || children }
    </Component>
  );
})

const defaultVariant = (delay, y, duration) => ({
  hidden: {
    opacity: 0,
    y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration,
    },
  },
});

MotionText.displayName = 'MotionText';