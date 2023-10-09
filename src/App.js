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
  const frutas = [
    {nome: "Maca", valor: 6.8, img: Maca},
    {nome: "Pera",  valor: 3.4, img: Pera},
    {nome: "Uva", valor: 5.4, img: Uva},
    
  ];
  const mEscolar = [
    {nome: "Caneta", valor: 6.8},
    {nome: "Caderno",  valor: 3.4},
    {nome: "Lápis", valor: 5.4},
    
  ];

  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Footer/> */}
      <ExercicioList listas={mEscolar}/>
      <Equipe/>
    </div>
  );
}

export default App;
