import { Link } from "react-router"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-amber-500">
      <h1><span>Pet</span>Shop</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
