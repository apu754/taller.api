const obtenerPersonaje = () => {
  let inputText = document.getElementById('input_personaje');
  let nombrePersonaje = inputText.value;
  peticionApi(nombrePersonaje);
};

const peticionApi = (nombrePersonaje) => {
  const BaseUrl = 'https://rickandmortyapi.com/api/';
  const endpoint = `character/?name=${nombrePersonaje}`;
  const url = `${BaseUrl}${endpoint}`;

  axios
    .get(url)
    .then((res) => {
      const personajes = res.data.results;
      const personajeExacto = personajes.find(
        (personaje) => personaje.name.toLowerCase() === nombrePersonaje.toLowerCase()
      );
      if (personajeExacto) {
        ImprimirData(personajeExacto);
      } else {
        alert('No se encontró ningún personaje con ese nombre.');
      }
    })
    .catch((err) => alert(err));
};

const ImprimirData = (data) => {
  const respuesta = document.getElementById('Show-info');
  respuesta.innerHTML = `
      <div>
        <h2>${data.name}</h2>
        <p><strong>Estado:</strong> ${data.status}</p>
        <p><strong>Especie:</strong> ${data.species}</p>
        <img class="personaje-imagen" src="${data.image}" alt="${data.name}" />
      </div>
    `;
};
