import PetCard from "../components/PetCard";
import imagem_1 from "../assets/imagem_01.jpg"
import imagem_2 from "../assets/imagem_02.jpg"

const Home = () => {
    const servicos = [
        { id: 1, titulo: "Banho e tosa - cachorro", preco: "R$200,00", imagem: imagem_1 },
        { id: 2, titulo: "Banho e tosa - gato", preco: "R$300,00", imagem: imagem_2 }
    ];
    return (
        <main className="px-[5%] mt-10 mb-16 grow">
            <h2 className="titulo text-2xl">SERVIÇOS EM DESTAQUE</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 ">
                {servicos.map((opcao) => (
                    <PetCard
                        key={opcao.id}
                        titulo={opcao.titulo}
                        imagem={opcao.imagem}
                        preco={opcao.preco}
                    />
                ))}

            </section>
        </main>
    )
}

export default Home
