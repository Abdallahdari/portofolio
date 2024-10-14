const Fadein = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 20 : direction === "down" ? 10 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.82,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Corrected ease values
      },
    },
  };
};
export default Fadein;
