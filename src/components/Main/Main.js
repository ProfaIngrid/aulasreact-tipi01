import ExibirPerfil from '../ExibirPerfil/ExibirPerfil'
import Icon from '../../images/icon.jpg';
import Icon2 from '../../images/luffy.jpg';
import Nami from '../../images/nami.jpg';
import './Main.css'


function Main() {
    return(
        <main>
            <ExibirPerfil nome="Buggy" caracteristicas="Palhaço. (Pirata nas horas vagas)" img={Icon}/>
            <ExibirPerfil nome="Luffy" caracteristicas="Pirata. (Estica nas horas vagas)" img={Icon2}/>
            <ExibirPerfil nome="Nami" caracteristicas="Bandida. (Pirata e traira nas horas vagas)" img={Nami}/>
            
        </main>
    )
}

export default Main;