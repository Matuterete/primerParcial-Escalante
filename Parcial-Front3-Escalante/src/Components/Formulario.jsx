import { useState } from 'react'
import Card from "./Card";
const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [artista, setArtista] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (validarFormulario()) {
      setShowCard(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowCard(false);
    }
  }

  function validarFormulario() {
    // Validaciones
    if (nombre.length < 3 || /^\s/.test(nombre)) return false;
    if (apellido.length < 6) return false;
    return true;
  }

  return (
    <div>
      <h2>Completa el Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label for="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onInput={(e) => setNombre(e.target.value)}
          required
        />
        <br />

        <label for="apellido">Apellido:</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onInput={(e) => setApellido(e.target.value)}
          required
        />
        <br />

        <label for="edad">Edad:</label>
        <input
          id="edad"
          type="number"
          value={edad}
          onInput={(e) => setEdad(e.target.value)}
          required
        />
        <br />

        <label for="artista">Artista Favorito:</label>
        <input
          id="artista"
          type="text"
          value={artista}
          onInput={(e) => setArtista(e.target.value)}
          required
        />
        <br />

        <button type="submit">Enviar</button>
      </form>

      {showCard && (
        <Card
          nombre={nombre}
          apellido={apellido}
          edad={edad}
          artista={artista}
        />
      )}

      {showError && (
        <div class="error-message">Por favor, chequea que la información sea correcta.</div>
      )}
   
    </div>);}
    export default Formulario