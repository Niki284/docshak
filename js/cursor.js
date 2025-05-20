export const cursorBol = () => {
  const cursor = document.querySelector('.cursor');

  // Stop als .cursor niet bestaat
  if (!cursor) {
    console.warn("⚠️ .cursor element niet gevonden in de DOM.");
    return;
  }

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
      y: e.clientY - cursor.offsetHeight / 2,
      ease: 'power2.out',
    }, 0.020);

    gsap.set(cursor, { scale: 1, opacity: 1 });

    if (cursor.animation) cursor.animation.kill();

    cursor.animation = gsap.to(cursor, {
      duration: 0.5,
      ease: "power2.in",
      scale: 0.5,
      opacity: 0,
      onComplete: () => {
        cursor.style.pointerEvents = 'none';
      },
    });
  });
};
