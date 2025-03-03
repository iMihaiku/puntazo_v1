/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import Brain from '../Icon/Brain'
import Chart from '../Icon/Chart'
import Target from '../Icon/Target'
import Trophy from '../Icon/Trophy'
import style from './component.module.css'
export default function Introduction(): JSX.Element {
  return (
    <div className={style.introductionContainer}>
      <h1>Aprende, Progresa ¡Gana!</h1>
      <section>
        <div className={style.points}>
          <div className={style.pointsTitle}>
            <Brain
              styleOverride={{
                customStyle: { position: 'relative' },
                size: { width: '60px', height: '60px' },
                stroke: '#3b82f6'
              }}
            />
            <h2>Desafíos Diarios</h2>
          </div>
          <p>
            Mantén tu racha de aprendizaje con retos personalizados cada día
          </p>
        </div>
        <div className={style.points}>
          <div className={style.pointsTitle}>
            <Target
              styleOverride={{
                customStyle: { position: 'relative' },
                size: { width: '60px', height: '60px' },
                stroke: '#ef4444'
              }}
            />
            <h2>Niveles Progresivos</h2>
          </div>
          <p>
            Avanza a tu ritmo con dificultad adaptativa y contenido
            personalizado
          </p>
        </div>
        <div className={style.points}>
          <div className={style.pointsTitle}>
            <Trophy
              styleOverride={{
                customStyle: { position: 'relative' },
                size: { width: '60px', height: '60px' },
                stroke: '#eab308'
              }}
            />
            <h2>Sistema de Logros</h2>
          </div>
          <p>
            Desbloquea medallas y trofeos mientras alcanzas tus metas de
            aprendizaje
          </p>
        </div>
        <div className={style.points}>
          <div className={style.pointsTitle}>
            <Chart
              styleOverride={{
                customStyle: { position: 'relative' },
                size: { width: '60px', height: '60px' },
                stroke: '#40edec'
              }}
            />
            <h2>Mide tu progreso</h2>
          </div>
          <p>
            Recopila estadísticas y datos de tu rendimiento para mejorar tu
            progreso dia a dia
          </p>
        </div>
      </section>
    </div>
  )
}
