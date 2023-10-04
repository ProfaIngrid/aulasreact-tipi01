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

    return(
        <main>
            <Equipe e={7}
                n1='Kakashi' n2='Naruto' n3='Sakura' n4='Sasuke'
                i1={KakashiPerfil} i2={NarutoPerfil} i3={SakuraPerfil} i4={SasukePerfil}
                c1={caracKakashi} c2={caracNaruto} c3={caracSakura} c4={caracSasuke}
                />
            <Equipe e={8}
                n1='Kurenai Yūhi' n2='Shino Aburame' n3='Hinata Hyuuga' n4='Kiba Inuzuka'
                i1={KurenaiPerfil} i2={HinataPerfil} i3={ShinoPerfil} i4={KibaPerfil}
                c1={caracKakashi} c2={caracNaruto} c3={caracSakura} c4={caracSasuke}
                />
        </main>
    )
}

export default Main;