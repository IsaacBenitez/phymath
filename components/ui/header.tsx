import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function zHeader() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 flex items-center">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img className="w-12 h-12 fill-current text-purple-600" src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683748996/PinClipart.com_physics-clipart_3823022_erwsmh.png" alt="phymath"/>
            </Link>
            <h1 className="ml-2 font-bold" >PHYMATH</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Registrarme
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
