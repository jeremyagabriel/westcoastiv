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
  threshold = 1,
  delay,
  ...props
}) => {

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
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
        ? defaultVariant(delay)
        : variants
      }
      {...props}
    >
      { text || children }
    </Component>
  );
})

const defaultVariant = delay => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
});

MotionText.displayName = 'MotionText';