import { Header } from "./components/Header";
import { Projetos } from "./components/Projetos";
import { Skills } from "./components/Skills";
import { Sobre } from "./components/Sobre";
import { SobreMim } from "./components/SobreMim";

function App() {
  return (
  <>
    <Header/>
    <Sobre/>
    <SobreMim/>
    <Skills/>
    <Projetos/>
  </>
  );
}

export default App;
