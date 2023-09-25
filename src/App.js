import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ExibePerfil from './components/ExibePerfil/ExibePerfil';
import NarutoPerfil from './images/narutoPerfil.webp'

function App() {
  return (
    <div className="App">
      <Header/>
      <ExibePerfil nome="Naruto" caracteristica="Ninja" img={NarutoPerfil}/>
      <Footer/>
    </div>
  );
}

export default App;
