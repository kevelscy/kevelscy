import { useRef, useState } from 'react'
import { Link } from 'remix'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '~/components/common/icons'

export const Footer = () => {
  const [clipboardCopy, setClipboardCopy] = useState(false)
  const { current: resourceLinks } = useRef({
    routes: [
      { to: '/', label: '🧑🏽 About' },
      { to: '/', label: '💼 Projects' },
      { to: '/', label: '📪 Contact' },
    ],

    rrss: [
      {
        icon: <a
          href='https://github.com/kevelscy/'
          target='_blank'
          rel='noopener noreferrer'
          className='social__github hover:top-1 hover:-left-1 hover:shadow-[4px_4px_0px_#61dafb]'
        >
          <GithubIcon classes='fill-white' />
        </a>,
        title: 'Github',
      },
      {
        icon: <a
          href='https://www.linkedin.com/in/scriptkev/'
          target='_blank'
          rel='noopener noreferrer'
          className='social__linkedin hover:top-1 hover:-left-1 hover:shadow-[4px_4px_0px_#61dafb]'
        >
          <LinkedinIcon classes='fill-white' />
        </a>,
        title: 'Linkedin',
      },
      {
        icon: <a
          href='https://www.instagram.com/kevelscy/'
          target='_blank'
          rel='noopener noreferrer'
          className='social__instagram hover:top-1 hover:-left-1 hover:shadow-[4px_4px_0px_#61dafb]'
        >
          <InstagramIcon classes='fill-white' />
        </a>,
        title: 'Instagram',
      },
    ]
  })

  return (
    <footer className='bg-blue-50 text-gray-900 py-6 z-20 mt-20 overflow-hidden'>
      <div className='max-w-4xl mx-auto flex justify-center items-center px-4'>
        <div className='w-1/2 text-left'>
          <Link to='/' className='font-black text-2xl hover:text-blue-500 hover:bg-blue-100 rounded-sm py-2 px-3 select-none transition-colors'>
            KEVELSCY
          </Link>
          <br />

          <ul className='pl-3 mt-4 flex items-center justify-start space-x-3'>
            {
              resourceLinks.rrss.map(socialMedia => <li>{socialMedia.icon}</li>)
            }
          </ul>

          <div className='pl-3 mt-4 flex items-center space-x-3'>
            <span className='inline-flex'>
              <img
                src='https://images.emojiterra.com/google/noto-emoji/v2.028/128px/1f1fb-1f1ea.png'
                className='w-6'
              />
              {'👨🏽‍💻'}
            </span>
          </div>
        </div>

        <nav className='w-1/2 justify-self-end'>
          <ul className='h-full flex flex-col space-y-4 justify-center items-end'>
            {
              resourceLinks.routes.map((anchorLink) => {
                if (anchorLink.label === '📪 Contact') return (
                  <li key={anchorLink.label} className='relative'>
                    <div className={`py-1 px-2 bg-green-500 rounded-sm text-white font-bold absolute top-1 -left-32 transition-all ${clipboardCopy ? 'translate-y-0' : 'translate-y-48'}`}>
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
                  <li key={anchorLink.label}>
                    <Link
                      className='font-medium ml-4 select-none hover:text-blue-500 hover:bg-blue-100 rounded-sm py-2 px-3 transition-colors'
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
    </footer>
  )
}