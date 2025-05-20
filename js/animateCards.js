export const animateCards = () => {
  gsap.fromTo(".cards__persoon .card",
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cards__persoon",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        markers: false
      }
    }
  );
};
