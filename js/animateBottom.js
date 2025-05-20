export const animateBottom = () => {
  gsap.from(".bottom", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 1,
    ease: "power2.out"
  });
};
