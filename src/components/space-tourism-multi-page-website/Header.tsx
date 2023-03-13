import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const p = 'space-tourism-multi-page-website'
  const links = ['home', 'destination', 'crew', 'technology']

  console.log(isMenuOpen)

  return (
    <header className='bg-red-300e p-4 text-white'>
      <nav className='flex items-center justify-between'>
        <a href={`/${p}`} className='text-xl font-bold text-red-500'>
          <img src={`/${p}/shared/logo.svg`} alt='logo' />
        </a>

        <button onClick={() => setIsMenuOpen(true)}>
          <img src={`/${p}/shared/icon-hamburger.svg`} alt='' />
        </button>

        {/* navigation bar */}
        <div
          className={`fixed top-0 z-10 h-screen w-4/6 bg-white bg-opacity-5 p-4 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
          onClick={() => {}}
        >
          <button
            className='absolute right-11 top-8 md:hidden'
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={`/${p}/shared/icon-close.svg`} alt='' />
            <span className='sr-only'>Close</span>
          </button>
          <ul className='mt-28 flex flex-col gap-8'>
            {links.map((l, i) => (
              <li key={l}>
                <a
                  data-index={i.toString().padStart(2, '0')}
                  className={`text-xl uppercase leading-[19px] tracking-[2.7px] text-white before:pr-2 before:font-bold before:content-[attr(data-index)]`}
                  href={`/${p}${l === 'home' ? '' : `/${l}`}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
