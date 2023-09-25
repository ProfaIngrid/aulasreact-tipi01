import ExibePerfil from '../ExibePerfil/ExibePerfil';
import NarutoPerfil from '../../images/narutoPerfil.webp';
import SasukePerfil from '../../images/sasukePerfil.webp';

function Main() {
    return(
        <main>
            <ExibePerfil nome="Naruto" img={NarutoPerfil}/>
            <ExibePerfil nome="Sasuke" img={SasukePerfil}/>
        </main>
    )
}

export default Main;