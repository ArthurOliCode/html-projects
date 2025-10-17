const revelarElemento = document.querySelectorAll(".reveal");

const opcoesVisualizacao = {
  root: null,
  margin: "0px",
  threshold: 0.1,
};

const observadorCallback = (entidades, observador) => {
  entidades.forEach((entidade) => {
    if (entidade.isIntersecting) {
      entidade.target.classList.add("ativo");

      observador.unobserve(entidade.target);
    }
  });
};

const observador = new IntersectionObserver(
  observadorCallback,
  opcoesVisualizacao
);

revelarElemento.forEach((elemento) => {
  observador.observe(elemento);
});
