const container = document.getElementById("galeria-container");
const filtroInput = document.getElementById("filtro");
const ordenarBtn = document.getElementById("ordenar-btn");

let filmesExibidos = [...filmes]; // copia dos filmes para manipular

function mostrarFilmes(lista) {
  container.innerHTML = ""; // limpa
  lista.forEach(filme => {
    const card = document.createElement("a");
    card.href = `detalhe.html?id=${filme.id}`;
    card.className = "card-capa";
    card.innerHTML = `
      <div class="capa-container">
        <img src="${filme.capa}" alt="Capa do filme ${filme.titulo}" />
        <div class="titulo-overlay">${filme.titulo}</div>
      </div>
    `;
    container.appendChild(card);
  });
}


// Mostrar todos no início
mostrarFilmes(filmesExibidos);

// Filtrar ao digitar
filtroInput.addEventListener("input", () => {
  const texto = filtroInput.value.toLowerCase();
  filmesExibidos = filmes.filter(filme => filme.titulo.toLowerCase().includes(texto));
  mostrarFilmes(filmesExibidos);
});

// Ordenar ao clicar no botão
ordenarBtn.addEventListener("click", () => {
  filmesExibidos.sort((a, b) => a.titulo.localeCompare(b.titulo));
  mostrarFilmes(filmesExibidos);
});
