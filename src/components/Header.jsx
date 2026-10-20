import { Link } from "react-router"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-orange-500">
      <h1 className="logo p-2 text-4xl font-bold text-orange-50 transition-all"><span className="text-black">Pet</span>Shop</h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to='/' className='text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all'>Home</Link>
          </li>
          <li>
            <Link to='/produtos' className='text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all'>Produtos</Link>
          </li>
          <li>
            <Link to='/sobre' className='text-white text-lg no-underline hover:text-orange-200 hover:underline transition-all'>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
