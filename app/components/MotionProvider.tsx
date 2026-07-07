"use client";

import { MotionConfig } from "framer-motion";

/* reducedMotion="user": when the OS asks for reduced motion, Framer Motion
   skips transform animations site-wide and keeps opacity-only reveals. */
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
