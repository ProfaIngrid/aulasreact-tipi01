import './App.css';
import Header from './components/Header/Header';
/* import Main from './components/Main/Main'; */
import Footer from './components/Footer/Footer';
import Equipe from './components/Equipe/Equipe'


/* import ExibirPerfil from './components/ExibirPerfil/ExibirPerfil';
import Icon from './images/icon.jpg';
import Icon2 from './images/luffy.jpg'; */

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main/> */}
      <Equipe numero="8" nome1="Teste1" nome2="Teste2"/>
      <Equipe numero="1" nome1="Teste1" nome2="Teste2"/>
      <Footer/>
      {/* <ExibirPerfil nome="Buggy" caracteristicas="Palhaço. (Pirata nas horas vagas)" img={Icon}/>
      <ExibirPerfil nome="Luffy" caracteristicas="Pirata. (Estica nas horas vagas)" img={Icon2}/> */}
    </div>
  );
}

export default App;
