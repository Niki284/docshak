export const animateInfoList = () => {
  gsap.fromTo(".info.cards li",
    { opacity: 0, x: -80 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".info.cards",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        markers: false
      }
    }
  );
};
