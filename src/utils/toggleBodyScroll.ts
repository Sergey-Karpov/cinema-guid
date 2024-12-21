type Actions = "add" | "remove";

export const toggleBodyScroll = (action: Actions): void => {
  const staticElements = document.querySelectorAll<HTMLElement>(".static");

  switch (action) {
    case "add":
      if (window.innerWidth !== document.documentElement.clientWidth) {
        const gap = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${gap}px`;

        staticElements.forEach((el) => {
          el.style.paddingRight = `${gap}px`;
        });
      }
      document.body.classList.add("block-scroll");

      break;
    case "remove":
      document.body.style.paddingRight = "0px";
      document.body.classList.remove("block-scroll");

      staticElements.forEach((el) => {
        el.style.paddingRight = "0px";
      });

      break;
  }
};
