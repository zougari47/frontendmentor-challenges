export const Header = () => {
  const p = 'space-tourism-multi-page-website'
  const links = ['home', 'destination', 'crew', 'technology']
  return (
    <header className='container mt-10 text-white'>
      <nav className='flex items-center justify-between'>
        <a href={`/${p}`} className='text-xl font-bold text-red-500'>
          <img src={`/${p}/shared/logo.svg`} alt='logo' />
        </a>

        <button>
          <img src={`/${p}/shared/icon-hamburger.svg`} alt='' />
        </button>
        {/* navigation bar */}
        <ul className='flex gap-5 bg-red-500 p-4'>
          {links.map((l, i) => (
            <li>
              <a
                data-index={i.toString().padStart(2, '0')}
                className={`before:pr-2 before:content-[attr(data-index)]`}
                href={`/${p}${l === 'home' ? '' : `/${l}`}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
