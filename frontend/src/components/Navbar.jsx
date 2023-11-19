import { ReactComponent as LogoSVG } from './../images/navbar-logo.svg';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6" style={{width: '100vw'}}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <LogoSVG style={{ width: '80px', height: 'auto' }}/>
        <span className="font-semibold text-xl tracking-tight pl-2">Stock</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
            Home
          </a>
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
            Why Zen
          </a>
          <a href="/investing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
            Investing
          </a>
          <a href="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
            Portfolio
          </a>
          <a href="/pricing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Pricing
          </a>
        </div>
        <div>
          <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
            Login
          </a>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4">Create Account</a>
        </div>
      </div>
    </nav>
    )
}