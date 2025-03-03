import Image from 'next/image'
import './main.css'
import homeImage from '@/resources/homeImage.jpg'
import Separator from '@/components/Separator/Separator'
import Introduction from '@/components/SectionContent/Introduction'
import Presentation from '@/components/SectionContent/Presentation'
import Banner from '@/components/SectionContent/Banner'
import Header from '@/components/NavBar/Header'

export default function Page(): JSX.Element {
  return (
    <>
      <Header></Header>
      <main>
        <section className="presentation">
          <Image
            src={homeImage}
            alt="Imagen de presentacion donde vemos a una mujer
           trabajando con un portatil mientras toma un cafe"
          ></Image>
          <div className="overlay"></div>
          <Presentation />
        </section>
        <section className="introduction">
          <Separator />
          <Banner />
        </section>
        <section className="banner">
          <Introduction />
        </section>
      </main>
    </>
  )
}
