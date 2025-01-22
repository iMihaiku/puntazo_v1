import AnimatedText from '../Animation/AnimatedWord'
import Button from '../Button/Button'
import ButtonReverse from '../Button/ButtonReverse'
import SparkAI from '../Icon/Spark'
import style from './component.module.css'
export default function Introduction(): JSX.Element {
  const sparkStyleOverride = {
    customStyle: {
      top:'7px',
      right:'7px',
      margin:'auto',
    },
    size:{
      width:24,
      height:24
    },
    fill: '#fff'
  }
  return (
    <div className={style.presentationContainer}>
      <h1>
        Aprende y Evalúa de Forma <AnimatedText />
      </h1>

      <p>
        Plataforma especializada en creación y resolución de ejercicios tipo
        test. Mejora tu aprendizaje con métodos educativos probados.
      </p>
      <Button>
      ¡Comenzar ahora!<SparkAI styleOverride={sparkStyleOverride}/> 
      </Button>
    </div>
  )
}
