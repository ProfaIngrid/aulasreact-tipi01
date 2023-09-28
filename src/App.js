import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ModeloComp from './components/ModeloComp/ModeloComp';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Footer/> */}
      <ModeloComp titulo="Titulo 1"/>
      <ModeloComp titulo="Titulo 2"/>
    </div>
  );
}

export default App;
