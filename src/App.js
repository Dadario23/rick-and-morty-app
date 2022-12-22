import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<CharacterList />} />
      </Routes>
    </div>
  );
}

export default App;
