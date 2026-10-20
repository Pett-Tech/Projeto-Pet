import PetCard from "../components/PetCard"
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
        <main className="px-[5%] mt-10 mb-16 grow">
            <h2 className="text-2xl">PRODUTOS</h2>
            <p className="text-gray-800, px-2, mb-10">AQUI VOCÊ ENCONTRARÁ TODOS OS PRODUTOS DISPONÍVEIS EM NOSSO PETSHOP!</p>
            <section className="grid gird-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                {produtos.map((produto) => (
                    <PetCard
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