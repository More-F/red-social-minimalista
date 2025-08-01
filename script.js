const { createElement } = require("react");

const formulario = document.getElementById("formPublicacion")
const feed = document.getElementById("feedPublicaciones")

formulario.addEventListenere("submit", function(e){e.preventdefalse})
const titulo = form.titulo.value.trim();
const descripcion = form.descripcion.value.trim();

const imagenURL = URL.createObjectURL(File)
const tarjetainf = document.createElement("div")
tarjetainf.className = "tarjetainf"
tarjetainf.innerHTML =  `<img src="${imagenURL}" alt="Publicacion"></img> <h2${titulo}></h2>
                        <p>${descripcion}</p>
                        <div class="like">
                        <button class="botonlike">Like</button><span class="Contador">0</span>likes
                        </div>`
const botonli = tarjetainf.querySelector(".botonlike")
const contadorlike = tarjetainf.querySelector(".Contador")
botonli.addEventListener("click",function(){
                        if (!botonlike.classList.contains("like")){botonli.classList.add("like")
                        contadorlike.textContent=parseInt(contadorlike.textContent)+1}}) 
feed.prepend(tarjetainf)
formulario.reset()

