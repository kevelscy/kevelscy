export const Hero = () => {
  return (
    <div className='mt-10 sm:mt-20'>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-start gap-y-8'>
        <div className='w-full sm:w-1/2 font-black'>
          <span className='typed text-3xl sm:text-4xl'>{'<>Hello World</>'}</span>
          <h1 className='text-6xl' style={{ textShadow: '2px 2px 0 #61dafb' }}>Soy Kevin <br /> Blanco</h1>
          <p className='font-normal text-lg mt-6'>
            Desarrollador web en proyectos comerciales, 
            aplicaciones modernas y sitios web personales.
          </p>
        </div>

        <div className='self-center sm:self-end'>
          <img
            src='/images/kevin.webp'
            className='w-44 h-44 sm:w-64 sm:h-64 rounded-full top-3 -left-3 shadow-[4px_4px_0px_#61dafb]'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  )
}
