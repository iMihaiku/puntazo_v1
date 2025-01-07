'use client'
import Link from 'next/link'
import { clientExample } from '@/lib/clientActions'
import { serverExample } from '@/lib/actions'
import style from './page.module.css'

export default function Page(): JSX.Element {
  const handleClick = (): void => {
    void serverExample().then((res) => {
      console.log('serverExample', res)
    })
    console.log('clientExample', clientExample())
  }
  return (
    <div className={style.main}>
      <h2 className="main">Home</h2>
      <button onClick={handleClick}>Click me!</button>
      <Link href="/about">About</Link>
    </div>
  )
}
