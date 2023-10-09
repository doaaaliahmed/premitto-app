export const isMobile = typeof window !== `undefined` && window.innerWidth < 768;

export const firstAppearVariant = {
  initial: { opacity: !isMobile ? 0 : 1, scale: !isMobile ? 0.9 : 1, y: !isMobile ? 30 : 0 },
  target: { opacity: 1, scale: 1, y: 0 },
};
export const listVariant = {
  hidden: {
    opacity: !isMobile ? 0 : 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
export const itemVariant = {
  hidden: { opacity: !isMobile ? 0 : 1 },
  visible: { opacity: 1 },
};