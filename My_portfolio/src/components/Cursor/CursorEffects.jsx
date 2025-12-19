import React, { useEffect, useRef } from 'react'
import './CursorEffects.css'

const CursorEffects = () => {
    const cursorRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) {
            return undefined
        }

        const handleMove = (event) => {
            const { clientX, clientY } = event
            cursor.style.transform = `translate(${clientX}px, ${clientY}px)`
        }

        const handleClick = (event) => {
            const burst = document.createElement('div')
            burst.className = 'cursor-burst'
            burst.style.left = `${event.clientX}px`
            burst.style.top = `${event.clientY}px`

            const dotCount = 8
            for (let i = 0; i < dotCount; i += 1) {
                const dot = document.createElement('span')
                dot.className = 'cursor-burst-dot'
                const angle = (Math.PI * 2 * i) / dotCount
                const distance = 16 + Math.random() * 10
                dot.style.setProperty('--x', `${Math.cos(angle) * distance}px`)
                dot.style.setProperty('--y', `${Math.sin(angle) * distance}px`)
                burst.appendChild(dot)
            }

            document.body.appendChild(burst)
            burst.addEventListener('animationend', () => {
                burst.remove()
            })
        }

        const handleHover = (event) => {
            const target = event.target
            if (
                target &&
                target.closest('a, button, input, textarea, select, [role="button"], .project-card')
            ) {
                cursor.classList.add('cursor-hover')
            } else {
                cursor.classList.remove('cursor-hover')
            }
        }

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('click', handleClick)
        window.addEventListener('mouseover', handleHover)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('click', handleClick)
            window.removeEventListener('mouseover', handleHover)
        }
    }, [])

    return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}

export default CursorEffects
