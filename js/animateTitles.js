// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export const animateTitles = () => {
  gsap.fromTo(".cards__title",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cards__title",
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  gsap.fromTo(".info__title",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".info__title",
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
};
