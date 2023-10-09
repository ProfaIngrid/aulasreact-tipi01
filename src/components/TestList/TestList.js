function TestList() {
    const dados = [
        {nome: "Maria", idade: 20, altura: 1.65},
        {nome: "João", idade: 19, altura: 1.80},
        {nome: "Joana", idade: 23, altura: 1.55},
        {nome: "Antonio", idade: 23, altura: 1.55},
    ];

    return(
        <>
            {dados.map((dado) => 
                <p>
                    Nome: {dado.nome} <br/>
                    idade: {dado.idade} <br/>
                    altura: {dado.altura} <br/>
                </p>
            )}
        </>
    )
}

export default TestList;