export default function Card(props) {

    return (
      <div class="card">
        <h2>Información ingresada:</h2>
        <p>Nombre: {props.nombre}</p>
        <p>Apellido: {props.apellido}</p>
        <p>Edad: {props.edad}</p>
        <p>Artista Favorito: {props.artista}</p>
      </div>
    );
  }
