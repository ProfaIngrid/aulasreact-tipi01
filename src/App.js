import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import TestList from './components/TestList/TestList';
import Maca from "../src/images/maca.jpg";
import Pera from "../src/images/pera.webp";
import Uva from "../src/images/uva.webp";
import ExercicioList from './components/ExercicioLista/ExercicioLista';
import Equipe from './components/Equipe/Equipe';

function App() {
  const equipe7 = [
    {nome: "Naruto", imagem: "", crt: "Caracteristica Naruto"},
    {}
  ]

  return (
    <div className="App">
      <Equipe listaP={equipe7}/>
    </div>
  );
}

export default App;
