import { useRef } from "react"
import { FirebaseIcon, NextIcon, TailwindIcon, TypescriptIcon } from "~/components/common/icons"

export const Projects = () => {
  const { current: projects } = useRef([
    {
      title: 'La Casa de mi Padre',
      description: 'Sitio web representativo cristiano con blog y sistema de reservaciones.',
      imgSrc: '/images/project1.webp',
      href: 'https://lcpcaracas.org',
      repository: 'https://github.com/kevelscy/lcpcaracas',
      techIcons: [
        <NextIcon classes='w-5 h-5' />,
        <TypescriptIcon classes='w-5 h-5' />,
        <TailwindIcon classes='w-5 h-5' />,
        <FirebaseIcon classes='w-5 h-5' />,
      ]
    },
  ])

  return (
    <div className='mt-20'>
      <span className='text-4xl font-black'>Mis Proyectos</span>
      <br /><br /><br />

      <ul className='w-full flex flex-wrap justify-start items-start gap-x-4 gap-y-4'>
        {
          projects.map(project => (
            <li key={project.title} className='rounded-md p-6 border-2 border-dashed border-blue-500 bg-blue-50 sm:max-w-[276px] w-full h-[368px]'>
              <article>
                <a
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <picture>
                    <img
                      src={project.imgSrc}
                      alt='kevin'
                      className='object-cover w-full h-28 rounded-sm'
                    />
                  </picture>
                </a>

                <section className='mt-2'>
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xl font-black hover:text-blue-500 project__description--truncate'
                  >
                    {project.title}
                  </a>
                </section>

                <section className='w-full mt-2'>
                  <ul className='w-full flex items-center gap-x-3'>
                    {
                      project.techIcons.map(icon => (
                        <li>{icon}</li>
                      ))
                    }
                  </ul>
                </section>

                <section className='mt-4'>
                  <p className='project__description--truncate'>{project.description}</p>
                </section>

                <section className='mt-4 text-white flex items-center justify-center space-x-2'>
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-black rounded-md w-full py-1.5 px-2 text-center hover:top-1 hover:-left-1 hover:shadow-[4px_4px_0px_#61dafb]'
                  >
                    Ver Proyecto
                  </a>
                  <a
                    href={project.repository}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-black rounded-md w-full py-1.5 text-center hover:top-1 hover:-left-1 hover:shadow-[4px_4px_0px_#61dafb]'
                  >
                    Codigo
                  </a>
                </section>
              </article>
            </li>
          ))
        }

        <li key='proximamente' className='rounded-md p-6 border-2 border-dashed border-gray-500 bg-blue-50 sm:max-w-[276px] w-full h-[368px] flex justify-center items-center text-center'>
          <span className='text-2xl font-black text-gray-900'>PROXIMAMENTE</span>
        </li>
      </ul>
    </div>
  )
}
