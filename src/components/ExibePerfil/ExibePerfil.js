function ExibePerfil(props){
    return(
        <div>
            <img src={props.img} alt={props.nome}/>
            <h1>Nome: {props.nome}</h1>
            <p>Caracteristicas: {props.caracteristica}</p>
        </div>
    )
}

export default ExibePerfil;