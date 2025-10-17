document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector("div#elementoAnimacaoEixoY");

  const windowHeight = window.innerHeight;

  function animarRolagem() {
    const scrollPosition = window.scrollY;
    const boxTop = box.getBoundingClientRect().top + scrollPosition;
    const startPoint = boxTop - windowHeight / 2;
    const endPoint = startPoint + 300;

    let progresso = scrollPosition - startPoint - (endPoint - startPoint);

    progresso = Math.max(0, Math.min(1, progresso));

    const translationY = progresso * -100;
    const opacidade = 1 - progresso;

    box.style.transform = `translateY(${translationY}px)`;
    box.style.opacity = opacidade;
  }
  window.addEventListener("scroll", animarRolagem);

  animarRolagem();
});
