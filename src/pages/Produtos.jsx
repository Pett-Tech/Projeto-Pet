import Card from "../components/Card"
import imagem_brinquedo from "../assets/brinquedo1.jpg"
import imagem_coleira from "../assets/coleira.jpg"
import imagem_racao from "../assets/racao.jpg"

const Produtos = () => {

    const produtos = [
        {id:1, titulo:"Brinquedo",preco:"R$30,00", imagem:imagem_brinquedo},
        {id:2, titulo:"Coleira",preco:"R$50,00", imagem:imagem_coleira},
        {id:3, titulo:"Ração",preco:"R$40,00", imagem: imagem_racao}
    ];

    return(
        <main>
            <h2>PRODUTOS EM DESTAQUE</h2>
            <section>
                {produtos.map((produto) => (
                    <Card
                    key={produto.id}
                    titulo={produto.titulo}
                    imagem={produto.imagem}
                    preco={produto.preco}
                    />
                ))}
            </section>
        </main>
    )
}

export default Produtos