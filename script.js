const formulario = document.getElementById("formPublicacion");
const feed = document.getElementById("feedPublicaciones");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const imagen = document.getElementById("imagen");
  const archivo = imagen.files[0];

  if (!archivo) return; // Si no hay imagen, no se publica

  const imagenURL = URL.createObjectURL(archivo);

  const tarjetainf = document.createElement("div");
  tarjetainf.className = "tarjetainf";

  tarjetainf.innerHTML = `
    <img src="${imagenURL}" alt="Publicación">
    <h2>${titulo}</h2>
    <p>${descripcion}</p>
    <div class="like">
      <button class="botonlike">Like</button>
      <span class="Contador">0</span> likes
    </div>
  `;

  const botonli = tarjetainf.querySelector(".botonlike");
  const contadorlike = tarjetainf.querySelector(".Contador");

  botonli.addEventListener("click", function () {
    if (!botonli.classList.contains("like")) {
      botonli.classList.add("like");
      contadorlike.textContent = parseInt(contadorlike.textContent) + 1;
    }
  });

  feed.prepend(tarjetainf);
  formulario.reset();
});