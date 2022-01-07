import { useRef, useState } from 'react'
import { Link } from 'remix'

export const Navbar = () => {
  const [clipboardCopy, setClipboardCopy] = useState(false)
  const { current: anchorLinks } = useRef([
    { to: '/', label: '🧑🏽 About' },
    { to: '/', label: '💼 Projects' },
    { to: '/', label: '📪 Contact' },
  ])

  return (
    <header className="w-full h-16 fixed top-0 z-40">
      <div
        style={{ backdropFilter: 'saturate(180%) blur(5px)', backgroundColor: '#d3def847' }}
        className='absolute top-0 w-full h-full border-b border-solid border-blue-100 border-opacity-60'
      />

      <div className="w-full h-16 absolute top-0 z-10 px-5">
        <div className='w-full h-full max-w-4xl mx-auto flex justify-between items-center'>
          <Link to='/' className='font-black text-2xl hover:text-blue-500 hover:bg-blue-100 rounded-sm py-2 px-3 select-none transition-colors'>
            KEVELSCY
          </Link>

          <nav className='hidden lg:block'>
            <ul className='w-full h-full flex justify-center items-center'>
              {
                anchorLinks.map((anchorLink, index) => {
                  if (anchorLink.label === '📪 Contact') return (
                    <li key={anchorLink.label} className='relative'>
                      <div className={`py-1 px-2 bg-green-500 rounded-sm text-white font-bold absolute top-11 right-2 w-[135px] transition-all ${clipboardCopy ? 'translate-y-0' : '-translate-y-48'}`}>
                        ¡Email Copiado!
                      </div>
  
                      <button
                        className='font-medium ml-4 select-none hover:text-blue-500 hover:bg-blue-100 rounded-sm py-2 px-3 transition-colors'
                        onClick={() => {
                          navigator.clipboard.writeText('kevelscy@gmail.com');
                          setClipboardCopy(true)
                          setTimeout(() => {
                            setClipboardCopy(false)
                          }, 2000)
                        }}
                      >
                        {anchorLink.label}
                      </button>
                    </li>
                  )

                  return (  
                    <li key={index}>
                      <Link
                        className='font-medium ml-4 select-none hover:text-blue-500 hover:bg-opacity-50 hover:bg-blue-100 rounded-sm py-2 px-3 transition-colors'
                        to={anchorLink.to}
                      >
                        {anchorLink.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
