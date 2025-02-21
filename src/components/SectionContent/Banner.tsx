import Button from '../Button/Button'
import Book from '../Icon/Book'
import Tag from '../Tag/Tag'
import style from './component.module.css'
export default function Introduction(): JSX.Element {
  const bookStyle = {
    customStyle: {
      margin: 'auto',
      position: 'relative' as 'relative',
      height: '24px'
    }
  }
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  }
  return (
    <div className={style.bannerSection}>
      <div className={style.textContainer}>
        <div className={style.buttonContainer}>
          <Tag tagStyle='success' styleOverride={{fontSize: '20px'}}>¡Aprende y Practica!</Tag>
        </div>
        <h1>Convierte el Aprendizaje en un Reto</h1>

        <p>
          Tests interactivos, juegos educativos y desafíos que hacen del
          aprendizaje una experiencia emocionante y efectiva.
        </p>
        <div className={style.buttonContainer}>
          <Button styleOverride={buttonStyle}>
            Realiza tus primeros test ¡Gratis!
            <Book styleOverride={bookStyle} />
          </Button>
        </div>
      </div>
      <div className={style.imageContainer}></div>
    </div>
  )
}
