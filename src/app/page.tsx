import Image from 'next/image'
import './main.css'
import homeImage from '@/resources/homeImage.jpg'
import Separator from '@/components/Separator/Separator'
import Introduction from '@/components/SectionContent/Introduction'
import Presentation from '@/components/SectionContent/Presentation'

export default function Page(): JSX.Element {
  return (
    <main>
      <section className='presentation'>
        <Image
          src={homeImage}
          alt="Imagen de presentacion donde vemos a una mujer
           trabajando con un portatil mientras toma un cafe"
        ></Image>
        <div className='overlay'></div>
        <Presentation />
      </section>
      <section className='introduction'>
        <Separator />
        <Introduction />
      </section>
    </main>
  )
}
