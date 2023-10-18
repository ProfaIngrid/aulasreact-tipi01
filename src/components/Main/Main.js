import ExibePerfil from '../ExibePerfil/ExibePerfil';
import NarutoPerfil from '../../images/narutoPerfil.webp';
import SasukePerfil from '../../images/sasukePerfil.webp';
import SakuraPerfil from '../../images/sakuraPerfil.webp';
import KakashiPerfil from '../../images/kakashiPerfil.webp';
import KurenaiPerfil from '../../images/kurenaiPerfil.webp';
import ShinoPerfil from '../../images/shinoPerfil.jpg';
import HinataPerfil from '../../images/hinataPerfil.webp';
import KibaPerfil from '../../images/kibaPerfil.webp';
import Equipe from '../Equipe/Equipe';
import './main.css';


function Main() {
    let caracKakashi = "Ele é conhecido por seu domínio em diversas técnicas ninja, sendo especialmente famoso por seu uso do Sharingan (um poderoso jutsu ocular) e por sua habilidade de copiar técnicas de outros ninjas.";
    let caracNaruto = "Ele possui uma habilidade única chamada Chakra da Kyuubi, que lhe confere grande poder. Além disso, ele é habilidoso em técnicas de clonagem e é famoso por sua técnica Rasengan";
    let caracSasuke = "Ele é um usuário talentoso do Sharingan e, mais tarde, desenvolve o Mangekyou Sharingan. Sasuke também se torna um mestre em técnicas de manipulação de raios, conhecidas como Raiton";
    let caracSakura = " Ela é altamente treinada em técnicas médicas e se destaca na manipulação de chakra para curar ferimentos. Além disso, ela desenvolve habilidades de combate notáveis";

    const equipe7 = [
        {nome: "Naruto", imagem: NarutoPerfil, crt: caracNaruto},
        {nome: "Kakashi", imagem: KakashiPerfil, crt: caracKakashi},
        {nome: "Sasuke", imagem: SasukePerfil, crt: caracSasuke},
        {nome: "Sakura", imagem: SakuraPerfil, crt: caracSakura}
      ]
    
    return(
        <main>
            <Equipe titulo={"Equipe 7"} listaP={equipe7}/>
        </main>
    )
}

export default Main;