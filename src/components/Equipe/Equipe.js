import ExibirPerfil from "../ExibirPerfil/ExibirPerfil";

function Equipe({numero,nome1,nome2}){
    return(
        <div>
            <h1>Equipe {numero}</h1>
            <ExibirPerfil nome={nome1} />
            <ExibirPerfil nome={nome2} />
        </div>
    )
}

export default Equipe;