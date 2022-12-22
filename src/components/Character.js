export default function Character({ character }) {
  return (
    <div className="col-sm-5 col-md-4 col-lg-3 text-center">
      <div className="card my-4">
        <img className="card-img-top" src={character.image} alt="avatar" />
        <div>Nombre: {character.name}</div>
        <div>Estado: {character.status}</div>
        <div>Especie: {character.species}</div>
        <div>Sexo: {character.gender}</div>
      </div>
    </div>
  );
}
