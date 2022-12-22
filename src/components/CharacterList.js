import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span>Página: {page}</span>
      <div>
        <button
          className="btn"
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        >
          ⏮️
        </button>
        <button className="btn" onClick={() => setPage(page + 1)}>
          ⏭️
        </button>
      </div>
    </div>
  );
}
export default function CharacterList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    axios.get(url).then((res) => setData(res.data.results));
    setLoading(false);
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>cargando</h1>
      ) : (
        <div className="row">
          {data.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </div>
      )}
    </div>
  );
}
