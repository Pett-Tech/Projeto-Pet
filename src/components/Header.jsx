import { Link } from "react-router"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-orange-500 rounded-4xl">
      <h1 className="logo p-2 text-4xl font-bold text-orange-50 transition-all"><span className="text-orange-50">Pet</span>Shop</h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li className="text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all cursor-pointer">Home</li>
          <li className="text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all cursor-pointer">Produtos</li>
          <li className="text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all cursor-pointer">Sobre</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
