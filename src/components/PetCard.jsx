//Destruct

const PetCard = ({titulo, preco, imagem}) =>{
    return (
        <div className="bg-orange-500 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border-4 hover:border-orange-500 ">
            <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover" />

            <article className="p-4 text-center">
                <h2 className="text-xl text-black uppercase
             mb-3 font-bold">{titulo}</h2>

                <p className="text-white text-2xl font-bold mb-4">{preco}</p>
                <button className="bg-white
                py-4 px-4 rounded-2xl border-none cursor-pointer font-semibold
                transition-all duration-300h text-black hover:scale-105">
                    Comprar
                </button>
            </article>

        </div>
    )
}
 


export default PetCard
