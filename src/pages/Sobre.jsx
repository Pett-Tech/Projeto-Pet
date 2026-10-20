

const Sobre = () => {
  return (
    <section id="servicos" className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8l">
            <div className="mb-16 max-w-2xl">    
                  <h2 className="text-4xl font-bold tracking-tight mb-4">Sobre  <span className="text-orange-500">Nós</span></h2>
                  <p className="text-black text-2xl">Tudo o que seu pet precisa, em um só lugar. Estrutura moderna e equipe qualificada para garantir bem-estar.</p>
            </div>

            {/* cards sobre o Pet-Shop */}
            <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-black bg-brand-surface border-white p-8 rounded-3xl  transition-transform hover:-translate-y-1 hover:border-[#bd6500] border-4">
                    <h2 className="text-orange-500 text-2xl font-bold mb-3" >Banho Relaxante🧼</h2>
                    <p className=" text-white leading-relaxed mb-6">Produtos premium, água na temperatura ideal e secagem sem estresse para cães e gatos.</p>
                </div>
                    
                  <div className="bg-black bg-brand-surface border-white p-8 rounded-3xl transition-transform hover:-translate-y-1 hover:border-[#bd6500] border-4">
                    <h2 className="text-orange-500 text-2xl font-bold mb-3">Tosa Especializada✂️</h2>
                    <p className="text-white leading-relaxed mb-6">Tosa na tesoura, tosa da raça e tosa higiênica, respeitando o padrão e conforto do animal.</p>
                </div>

                  <div className="bg-black bg-brand-surface border-white p-8 rounded-3xl transition-transform hover:-translate-y-1 hover:border-[#bd6500] border-4">
                    <h2 className="text-orange-500 text-2xl font-bold mb-3">Veterinário🩺</h2>
                    <p className="text-white leading-relaxed mb-6">Consultas de rotina, vacinas importadas e exames rápidos com profissionais empáticos.</p>
                </div>
            </div>
        </div>       
      
    </section>
  )
}

export default Sobre
