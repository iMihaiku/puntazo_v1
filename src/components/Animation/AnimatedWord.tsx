'use client'

import React, { useState, useEffect } from 'react'
import style from './component.module.css'

export default function AnimatedText(): JSX.Element {
  const [text, setText] = useState('')
  const fullText = 'Interactiva'
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typewriterEffect = () => {
      if (!isDeleting && text.length < fullText.length) {
        setText(fullText.slice(0, text.length + 1))
      } else if (isDeleting && text.length > 0) {
        setText(text.slice(0, -1))
      } else if (text.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (text.length === 0) {
        setIsDeleting(false)
      }
    }

    const typingTimer = setTimeout(typewriterEffect, isDeleting ? 50 : 40)
    return () => clearTimeout(typingTimer)
  }, [text])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 650)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className={style.animatedContainer}>
      <span className={''}>{text}</span>
      <span
        className={`${style.cursor} ${!showCursor ? style.show : style.hide}`}
      >
        |
      </span>
    </div>
  )
}
