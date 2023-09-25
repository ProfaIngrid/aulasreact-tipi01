function ExibePerfil({nome, img, caracteristica}){
    return(
        <div>
            <img src={img} alt={nome}/>
            <h1>Nome: {nome}</h1>
            <p>Caracteristicas: {caracteristica}</p>
        </div>
    )
}

export default ExibePerfil;