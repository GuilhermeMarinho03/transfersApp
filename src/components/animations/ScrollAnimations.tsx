import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// Fade In Animation
export function FadeIn({ children, delay = 0, duration = 0.6, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide Up Animation
export function SlideUp({ children, delay = 0, duration = 0.8, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide In From Left
export function SlideInLeft({ children, delay = 0, duration = 0.8, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide In From Right
export function SlideInRight({ children, delay = 0, duration = 0.8, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale Animation
export function ScaleIn({ children, delay = 0, duration = 0.6, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for multiple children
interface StaggerProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, delay = 0, staggerDelay = 0.1, className = '' }: StaggerProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Parallax Effect
export function Parallax({ children, speed = 0.5, className = '' }: AnimationProps & { speed?: number }) {
  const { ref, isInView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      style={{
        y: isInView ? 0 : speed * 100
      }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating Animation
export function FloatingElement({ children, className = '' }: Omit<AnimationProps, 'delay' | 'duration'>) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotate In Animation
export function RotateIn({ children, delay = 0, duration = 0.8, className = '' }: AnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.9 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}