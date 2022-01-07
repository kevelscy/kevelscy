import { Footer } from '~/components/layout/Footer'
import { Navbar } from '~/components/layout/Navbar'

export const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className='w-full h-full relative'>
      <Navbar />

      <main className='pt-16 px-4 min-h-screen max-w-4xl mx-auto'>
        {children}
      </main>

      <Footer />
    </div>
  )
}
