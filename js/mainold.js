window.addEventListener('DOMContentLoaded', () => {
  
  // Titel "Personen" animatie (komt als eerste)
 // ScrollTrigger activeren
//gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".cards__title",
  {
    opacity: 0,
    y: 30
  },
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
  {
    opacity: 0,
    y: 30
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".info__title",
      //markers:true,
      start: "top 90%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse"
    }
  }
);

gsap.fromTo(".info.cards li",
  {
    opacity: 0,
    x: -80 // van links naar rechts
  },
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



// Cards animeren zodra ".cards__persoon" in beeld komt
gsap.fromTo(".cards__persoon .card",
  {
    opacity: 0,
    y: 80
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cards__persoon",
      start: "top 80%",   // Wanneer de section 80% in beeld is
      end: "bottom 20%",  // Tot hij 20% uit beeld is
      toggleActions: "play reverse play reverse", // fade in bij scrollen naar beneden, fade out bij scrollen omhoog
      markers: false // zet op true voor debug
    }
  }
);



  // Animate een formulier of ander element onderaan (zoals contact of feedback)
  gsap.from(".bottom", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 1,             // Past automatisch goed achter de kaarten
    ease: "power2.out"
  });

});

