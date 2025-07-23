function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const id = Number(getQueryParam("id")); // <-- converte para número
const detalheContainer = document.getElementById("detalhe-container");
const voltarBtn = document.getElementById("voltar-btn");

const filme = filmes.find(f => f.id === id);

if (filme) {
  detalheContainer.innerHTML = `
    <h2>${filme.titulo}</h2>
    <p>${filme.sinopse}</p>
    <iframe src="${filme.url}" allowfullscreen></iframe>
  `;
} else {
  detalheContainer.innerHTML = "<p>Filme não encontrado.</p>";
}

voltarBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
