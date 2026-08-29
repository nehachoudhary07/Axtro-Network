import React, { useState, forwardRef, HTMLAttributes } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
  color?: string;
  loop?: boolean;
}

// 1. SHIELD CHECK
export const ShieldCheck = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            animate={isHovered ? { scale: [1, 1.08, 1] } : loop ? { scale: [1, 1.03, 1] } : {}}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="m9 12 2 2 4-4"
            animate={
              isHovered
                ? { pathLength: [0, 1], opacity: [0, 1], scale: [0.8, 1.1, 1] }
                : loop
                ? { opacity: [0.75, 1, 0.75], pathLength: [0.95, 1, 0.95] }
                : {}
            }
            transition={{ duration: isHovered ? 0.45 : 2.5, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
ShieldCheck.displayName = 'ShieldCheck';

// 2. SHIELD
export const Shield = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            animate={
              isHovered
                ? { scale: [1, 1.12, 1], rotate: [0, -4, 4, 0] }
                : loop
                ? { scale: [1, 1.04, 1] }
                : {}
            }
            transition={{ duration: isHovered ? 0.5 : 3.5, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
Shield.displayName = 'Shield';

// 3. SHIELD ALERT
export const ShieldAlert = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            animate={isHovered ? { scale: [1, 1.08, 1] } : loop ? { scale: [1, 1.03, 1] } : {}}
            transition={{ duration: isHovered ? 0.4 : 3 }}
          />
          <motion.path
            d="M12 8v4"
            animate={
              isHovered
                ? { y: [-1.5, 1.5, 0], scaleY: [1, 1.2, 1] }
                : loop
                ? { opacity: [0.6, 1, 0.6] }
                : {}
            }
            transition={{ duration: isHovered ? 0.4 : 2, repeat: isHovered ? 0 : Infinity }}
          />
          <motion.path
            d="M12 16h.01"
            animate={isHovered ? { scale: [1, 1.6, 1] } : loop ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: isHovered ? 0.3 : 1.5, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
ShieldAlert.displayName = 'ShieldAlert';

// 4. ZAP
export const Zap = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
            animate={
              isHovered
                ? { pathLength: [0.1, 1], scale: [0.92, 1.15, 1], rotate: [0, -6, 6, 0] }
                : loop
                ? { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }
                : {}
            }
            transition={{ duration: isHovered ? 0.5 : 2.2, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
Zap.displayName = 'Zap';

// 5. ACTIVITY (Heartbeat / Pulse line)
export const Activity = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.48 12H2"
            animate={
              isHovered
                ? { pathLength: [0, 1], opacity: [0.2, 1] }
                : loop
                ? { pathOffset: [0, 1], opacity: [0.8, 1, 0.8] }
                : {}
            }
            transition={{
              duration: isHovered ? 0.6 : 3,
              repeat: Infinity,
              ease: isHovered ? 'easeOut' : 'linear',
            }}
          />
        </svg>
      </div>
    );
  }
);
Activity.displayName = 'Activity';

// 6. RADIO (Signal Waves)
export const Radio = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
            animate={
              isHovered
                ? { opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }
                : loop
                ? { opacity: [0.3, 1, 0.3] }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.path
            d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
            animate={
              isHovered
                ? { opacity: [0.3, 1, 0.3], scale: [0.95, 1.05, 0.95] }
                : loop
                ? { opacity: [0.4, 1, 0.4] }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="2"
            animate={isHovered ? { scale: [1, 1.4, 1] } : loop ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
            animate={
              isHovered
                ? { opacity: [0.3, 1, 0.3], scale: [0.95, 1.05, 0.95] }
                : loop
                ? { opacity: [0.4, 1, 0.4] }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.path
            d="M19.1 4.9C23 8.8 23 15.1 19.1 19"
            animate={
              isHovered
                ? { opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }
                : loop
                ? { opacity: [0.3, 1, 0.3] }
                : {}
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </svg>
      </div>
    );
  }
);
Radio.displayName = 'Radio';

// 7. SPARKLES
export const Sparkles = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            animate={
              isHovered
                ? { rotate: [0, 25, -20, 0], scale: [1, 1.25, 1] }
                : loop
                ? { rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }
                : {}
            }
            transition={{ duration: isHovered ? 0.6 : 3, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M20 3v4"
            animate={loop ? { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] } : {}}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
          />
          <motion.path
            d="M22 5h-4"
            animate={loop ? { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] } : {}}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
          />
        </svg>
      </div>
    );
  }
);
Sparkles.displayName = 'Sparkles';

// 8. GLOBE
export const Globe = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <circle cx="12" cy="12" r="10" />
          <motion.path
            d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
            animate={
              isHovered
                ? { scaleX: [1, 0.2, 1] }
                : loop
                ? { scaleX: [1, 0.6, 1] }
                : {}
            }
            transition={{ duration: isHovered ? 1.2 : 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <path d="M2 12h20" />
        </svg>
      </div>
    );
  }
);
Globe.displayName = 'Globe';

// 9. LAYERS
export const Layers = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
            animate={isHovered ? { y: [-3, 0] } : loop ? { y: [-1.5, 0, -1.5] } : {}}
            transition={{ duration: isHovered ? 0.4 : 2.5, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
            animate={isHovered ? { y: [3, 0] } : loop ? { y: [1.5, 0, 1.5] } : {}}
            transition={{ duration: isHovered ? 0.4 : 2.5, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>
      </div>
    );
  }
);
Layers.displayName = 'Layers';

// 10. LINK / LINK ICON
export const Link = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            animate={isHovered ? { x: [0, 2, 0], y: [0, -2, 0] } : loop ? { x: [0, 1, 0], y: [0, -1, 0] } : {}}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: isHovered ? 0 : Infinity }}
          />
          <motion.path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            animate={isHovered ? { x: [0, -2, 0], y: [0, 2, 0] } : loop ? { x: [0, -1, 0], y: [0, 1, 0] } : {}}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Link.displayName = 'Link';
export const LinkIcon = Link;

// 11. ARROW RIGHT
export const ArrowRight = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M5 12h14"
            animate={isHovered ? { x: [0, 4, 0] } : loop ? { x: [0, 2, 0] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="m12 5 7 7-7 7"
            animate={isHovered ? { x: [0, 4, 0] } : loop ? { x: [0, 2, 0] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
ArrowRight.displayName = 'ArrowRight';

// 12. ARROW UP RIGHT
export const ArrowUpRight = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M7 7h10v10"
            animate={isHovered ? { x: [0, 2.5, 0], y: [0, -2.5, 0] } : loop ? { x: [0, 1.2, 0], y: [0, -1.2, 0] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2.2, repeat: isHovered ? 0 : Infinity }}
          />
          <motion.path
            d="M7 17 17 7"
            animate={isHovered ? { x: [0, 2.5, 0], y: [0, -2.5, 0] } : loop ? { x: [0, 1.2, 0], y: [0, -1.2, 0] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2.2, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
ArrowUpRight.displayName = 'ArrowUpRight';

// 13. CHECK CIRCLE 2
export const CheckCircle2 = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <circle cx="12" cy="12" r="10" />
          <motion.path
            d="m9 12 2 2 4-4"
            animate={
              isHovered
                ? { pathLength: [0, 1], scale: [0.85, 1.1, 1] }
                : loop
                ? { opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }
                : {}
            }
            transition={{ duration: isHovered ? 0.4 : 2.5, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
CheckCircle2.displayName = 'CheckCircle2';

// 14. CHECK
export const Check = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M20 6 9 17l-5-5"
            animate={isHovered ? { pathLength: [0, 1], scale: [0.9, 1.1, 1] } : {}}
            transition={{ duration: 0.35 }}
          />
        </svg>
      </div>
    );
  }
);
Check.displayName = 'Check';

// 15. CPU
export const Cpu = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <motion.rect
            width="6"
            height="6"
            x="9"
            y="9"
            rx="1"
            animate={
              isHovered
                ? { scale: [1, 1.3, 1], rotate: [0, 90, 0] }
                : loop
                ? { scale: [1, 1.15, 1] }
                : {}
            }
            transition={{ duration: isHovered ? 0.6 : 2.5, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M15 2v2M9 2v2M20 15h2M20 9h2M9 20v2M15 20v2M2 9h2M2 15h2"
            animate={loop ? { opacity: [0.4, 1, 0.4] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Cpu.displayName = 'Cpu';

// 16. SERVER
export const Server = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
          <motion.circle
            cx="18"
            cy="6"
            r="1"
            animate={loop ? { scale: [1, 2.2, 1], opacity: [0.3, 1, 0.3] } : {}}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.circle
            cx="18"
            cy="18"
            r="1"
            animate={loop ? { scale: [1, 2.2, 1], opacity: [0.3, 1, 0.3] } : {}}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
          />
        </svg>
      </div>
    );
  }
);
Server.displayName = 'Server';

// 17. CLOUD
export const Cloud = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
            animate={isHovered ? { y: [-3, 3, -3], scale: [1, 1.06, 1] } : loop ? { y: [-1.5, 1.5, -1.5] } : {}}
            transition={{ duration: isHovered ? 0.6 : 3, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
Cloud.displayName = 'Cloud';

// 18. BUILDING2
export const Building2 = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v8" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11" />
          <motion.path
            d="M10 6h4M10 10h4M10 14h4M10 18h4"
            animate={loop ? { opacity: [0.35, 1, 0.35] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Building2.displayName = 'Building2';

// 19. TERMINAL
export const Terminal = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.polyline
            points="4 17 10 11 4 5"
            animate={isHovered ? { x: [0, 3, 0] } : {}}
            transition={{ duration: 0.35 }}
          />
          <motion.line
            x1="12"
            x2="20"
            y1="19"
            y2="19"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
Terminal.displayName = 'Terminal';

// 20. GAMEPAD2
export const Gamepad2 = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M6 12h4m-2-2v4M17 11h.01M15 13h.01"
            animate={isHovered ? { scale: [1, 1.3, 1] } : loop ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: isHovered ? 0.3 : 1.5, repeat: isHovered ? 0 : Infinity }}
          />
          <motion.path
            d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
            animate={isHovered ? { rotate: [0, -5, 5, 0] } : loop ? { rotate: [0, -2, 2, 0] } : {}}
            transition={{ duration: isHovered ? 0.4 : 3, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Gamepad2.displayName = 'Gamepad2';

// 21. NETWORK
export const Network = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.rect
            x="16"
            y="16"
            width="6"
            height="6"
            rx="1"
            animate={loop ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.rect
            x="2"
            y="16"
            width="6"
            height="6"
            rx="1"
            animate={loop ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          />
          <motion.rect
            x="9"
            y="2"
            width="6"
            height="6"
            rx="1"
            animate={loop ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"
            animate={loop ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Network.displayName = 'Network';

// 22. CLOCK
export const Clock = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <circle cx="12" cy="12" r="10" />
          <motion.polyline
            points="12 6 12 12 16 14"
            animate={{ rotate: 360 }}
            style={{ originX: '12px', originY: '12px' }}
            transition={{ duration: isHovered ? 1.5 : 8, ease: 'linear', repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Clock.displayName = 'Clock';

// 23. PLAY
export const Play = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.polygon
            points="6 3 20 12 6 21 6 3"
            animate={isHovered ? { scale: [1, 1.2, 1], x: [0, 2.5, 0] } : loop ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Play.displayName = 'Play';

// 24. MAIL
export const Mail = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <motion.path
            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            animate={isHovered ? { y: [0, 2.5, 0] } : loop ? { y: [0, 1, 0] } : {}}
            transition={{ duration: isHovered ? 0.35 : 2.5, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Mail.displayName = 'Mail';

// 25. PHONE
export const Phone = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            animate={
              isHovered
                ? { rotate: [0, -15, 15, -10, 10, 0] }
                : loop
                ? { rotate: [0, -4, 4, 0] }
                : {}
            }
            transition={{ duration: isHovered ? 0.5 : 3.5, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Phone.displayName = 'Phone';

// 26. MAP PIN
export const MapPin = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            animate={isHovered ? { y: [-4, 0] } : loop ? { y: [-2, 0, -2] } : {}}
            transition={{ duration: isHovered ? 0.3 : 2, repeat: isHovered ? 2 : Infinity }}
          />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    );
  }
);
MapPin.displayName = 'MapPin';

// 27. SEND
export const Send = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
            animate={isHovered ? { x: [0, 4, 0], y: [0, -4, 0] } : loop ? { x: [0, 1.5, 0], y: [0, -1.5, 0] } : {}}
            transition={{ duration: isHovered ? 0.4 : 2.5, repeat: isHovered ? 0 : Infinity }}
          />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      </div>
    );
  }
);
Send.displayName = 'Send';

// 28. ALERT CIRCLE
export const AlertCircle = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <circle cx="12" cy="12" r="10" />
          <motion.line
            x1="12"
            x2="12"
            y1="8"
            y2="12"
            animate={loop ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.line
            x1="12"
            x2="12.01"
            y1="16"
            y2="16"
            animate={loop ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
AlertCircle.displayName = 'AlertCircle';

// 29. LOADER 2
export const Loader2 = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    );
  }
);
Loader2.displayName = 'Loader2';

// 30. SUN
export const Sun = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            animate={isHovered ? { scale: [1, 1.25, 1] } : loop ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: isHovered ? 0.3 : 2, repeat: isHovered ? 0 : Infinity }}
          />
          <motion.path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            animate={{ rotate: 360 }}
            style={{ originX: '12px', originY: '12px' }}
            transition={{ duration: isHovered ? 3 : 15, ease: 'linear', repeat: Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Sun.displayName = 'Sun';

// 31. MOON
export const Moon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            animate={
              isHovered
                ? { rotate: [0, -18, 18, 0], scale: [1, 1.15, 1] }
                : loop
                ? { rotate: [0, -6, 6, 0] }
                : {}
            }
            transition={{ duration: isHovered ? 0.5 : 4, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Moon.displayName = 'Moon';

// 32. CHEVRON DOWN
export const ChevronDown = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="m6 9 6 6 6-6"
            animate={isHovered ? { y: [0, 3, 0] } : loop ? { y: [0, 1.5, 0] } : {}}
            transition={{ duration: isHovered ? 0.3 : 2, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
ChevronDown.displayName = 'ChevronDown';

// 33. MENU
export const Menu = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.line
            x1="4"
            x2="20"
            y1="12"
            y2="12"
            animate={isHovered ? { scaleX: [1, 0.7, 1] } : { scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="4"
            x2="20"
            y1="6"
            y2="6"
            animate={isHovered ? { x: [0, 3, 0] } : { x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.line
            x1="4"
            x2="20"
            y1="18"
            y2="18"
            animate={isHovered ? { x: [0, -3, 0] } : { x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </div>
    );
  }
);
Menu.displayName = 'Menu';

// 34. X
export const X = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M18 6 6 18M6 6l12 12"
            animate={isHovered ? { rotate: [0, 90, 0] } : { rotate: 0 }}
            style={{ originX: '12px', originY: '12px' }}
            transition={{ duration: 0.4 }}
          />
        </svg>
      </div>
    );
  }
);
X.displayName = 'X';

// 35. LOCK
export const Lock = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <motion.path
            d="M7 11V7a5 5 0 0 1 10 0v4"
            animate={isHovered ? { y: [-3, 0] } : loop ? { y: [-1, 0, -1] } : {}}
            transition={{ duration: isHovered ? 0.3 : 2.5, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Lock.displayName = 'Lock';

// 36. COMPASS
export const Compass = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <circle cx="12" cy="12" r="10" />
          <motion.polygon
            points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            animate={
              isHovered
                ? { rotate: [0, 60, -45, 0] }
                : loop
                ? { rotate: [0, 20, -20, 0] }
                : {}
            }
            style={{ originX: '12px', originY: '12px' }}
            transition={{ duration: isHovered ? 0.6 : 4, repeat: isHovered ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }
);
Compass.displayName = 'Compass';

// 37. HEADPHONES
export const Headphones = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.path
            d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
            animate={isHovered ? { scale: [1, 1.15, 1], y: [-1, 1, 0] } : loop ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: isHovered ? 0.4 : 2, repeat: isHovered ? 0 : Infinity }}
          />
        </svg>
      </div>
    );
  }
);
Headphones.displayName = 'Headphones';

// 38. REFRESH CW
export const RefreshCw = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ size = 24, className = '', strokeWidth = 2, loop = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center select-none shrink-0 group', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full overflow-visible"
        >
          <motion.g
            animate={{ rotate: 360 }}
            style={{ originX: '12px', originY: '12px' }}
            transition={{ duration: isHovered ? 0.8 : 6, ease: 'linear', repeat: Infinity }}
          >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
          </motion.g>
        </svg>
      </div>
    );
  }
);
RefreshCw.displayName = 'RefreshCw';
