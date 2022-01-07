import { useRef } from "react"
import { Link } from "remix"
import { FirebaseIcon, JavascriptIcon, MongoIcon, NextIcon, NodeIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "~/components/common/icons"

export const Skills = () => {
  const { current: techSkills } = useRef([
    {
      icon: <JavascriptIcon classes='w-10 h-10' />,
      title: 'Javascript',
      description: '(El lenguaje que gobierna la web).',
      webLink: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {
      icon: <TypescriptIcon classes='w-10 h-10' />,
      title: 'Typescript',
      description: '(Para un codigo mas "seguro" y escalable).',
      webLink: 'https://www.typescriptlang.org/'
    },
    {
      icon: <ReactIcon classes='w-10 h-10' />,
      title: 'React.js',
      description: '(Librería front-end de preferencia).',
      webLink: 'https://es.reactjs.org/'
    },
    {
      icon: <NextIcon classes='w-10 h-10' />,
      title: 'Next.js',
      description: '(El SDK de la web).',
      webLink: 'https://nextjs.org/'
    },
    {
      icon: <NodeIcon classes='w-10 h-10' />,
      title: 'Node.js',
      description: '(Con Express para desarrollo back-end).',
      webLink: 'https://nodejs.org/es/'
    },
    {
      icon: <MongoIcon classes='w-10 h-10' />,
      title: 'MongoDB',
      description: '(Bases de datos NoSQL).',
      webLink: 'https://www.mongodb.com/'
    },
    {
      icon: <FirebaseIcon classes='w-10 h-10' />,
      title: 'Firebase',
      description: '(De los PaaS mas usados y accesibles).',
      webLink: 'https://firebase.google.com/'
    },
    {
      icon: <TailwindIcon classes='w-10 h-10' />,
      title: 'TailwindCSS',
      description: '(Para un estilado rapido, moderno y optimizado).',
      webLink: 'https://tailwindcss.com/'
    },
  ])

  return (
    <div className='mt-20'>
      <span className='text-4xl font-black'>Mis Tecnologias</span>
      <br /><br /><br />

      <div className='w-full flex flex-col sm:flex-row justify-between items-start space-y-5 sm:space-y-0 sm:space-x-6'>
        <ul className='w-full flex flex-col justify-start items-start space-y-5'>
          {
            [...techSkills.slice(0, 4)].map(techSkill => (
              <li key={techSkill.title} className='flex items-center space-x-3 hover:bg-blue-50 w-full rounded-r-md'>
                <figure className='rounded-md bg-blue-50 h-[60px] w-[60px] p-2.5'>
                  {techSkill.icon}
                </figure>

                <p>
                  <a
                    href={techSkill.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-black text-xl hover:text-blue-500'
                  >
                    {techSkill.title}{' '}
                  </a>
                  <span>{techSkill.description}</span>
                </p>
              </li>
            ))
          }
        </ul>

        <ul className='w-full flex flex-col justify-start items-start space-y-5'>
          {
            [...techSkills.slice(4, 8)].map(techSkill => (
              <li key={techSkill.title} className='flex items-center space-x-3 hover:bg-blue-50 w-full rounded-r-md'>
                <figure className='rounded-md bg-blue-50 h-[60px] w-[60px] p-2.5'>
                  {techSkill.icon}
                </figure>

                <p>
                  <a
                    href={techSkill.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-black text-xl hover:text-blue-500'
                  >
                    {techSkill.title}{' '}
                  </a>
                  <span>{techSkill.description}</span>
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
