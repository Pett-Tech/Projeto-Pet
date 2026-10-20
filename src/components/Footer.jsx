
const Footer = () => {
    return (
        <footer className="bg-[#2B2621] text-[#FDF6EC]">
            <div div className="max-w-6xl mx-auto px-6 py-10 flex justify-center gap-24 border-b border-[#FDF6EC]/10">
                <div>
                    <h3 className="font-semibold mb-2">PetShop</h3>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Contato</h3>
                    <ul className="space-y-1 textsm -text-[#FDF6EC]/70">
                        <li>contato@pettech.com.br</li>
                        <li>(11) 4002-8922</li>
                        <li>São Paulo, SP</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-xs text-[#FDF6EC]/50 py-4">© 2026 PetShop. Todos os direitos reservados.</p>
        </footer >
    )
}

export default Footer