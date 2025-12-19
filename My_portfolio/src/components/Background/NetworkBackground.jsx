import React, { useEffect, useRef } from 'react'
import './NetworkBackground.css'

const NetworkBackground = () => {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    const pointsRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) {
            return undefined
        }

        const context = canvas.getContext('2d')
        if (!context) {
            return undefined
        }

        const setCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createPoints = () => {
            const count = Math.max(36, Math.floor(window.innerWidth / 55))
            pointsRef.current = Array.from({ length: count }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6
            }))
        }

        const updatePoints = () => {
            const points = pointsRef.current
            points.forEach((point) => {
                point.x += point.vx
                point.y += point.vy

                if (point.x <= 0 || point.x >= canvas.width) {
                    point.vx *= -1
                }

                if (point.y <= 0 || point.y >= canvas.height) {
                    point.vy *= -1
                }
            })
        }

        const draw = () => {
            context.clearRect(0, 0, canvas.width, canvas.height)
            const points = pointsRef.current
            const maxDistance = Math.min(canvas.width, canvas.height) * 0.26

            for (let i = 0; i < points.length; i += 1) {
                for (let j = i + 1; j < points.length; j += 1) {
                    const dx = points[i].x - points[j].x
                    const dy = points[i].y - points[j].y
                    const distance = Math.hypot(dx, dy)

                    if (distance < maxDistance) {
                        const alpha = 0.5 * (1 - distance / maxDistance)
                        context.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`
                        context.lineWidth = 1
                        context.beginPath()
                        context.moveTo(points[i].x, points[i].y)
                        context.lineTo(points[j].x, points[j].y)
                        context.stroke()
                    }
                }
            }

            points.forEach((point) => {
                context.fillStyle = 'rgba(255, 255, 255, 0.4)'
                context.beginPath()
                context.arc(point.x, point.y, 2, 0, Math.PI * 2)
                context.fill()
            })
        }

        const animate = () => {
            updatePoints()
            draw()
            animationRef.current = window.requestAnimationFrame(animate)
        }

        setCanvasSize()
        createPoints()
        animate()

        const handleResize = () => {
            setCanvasSize()
            createPoints()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            if (animationRef.current) {
                window.cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />
}

export default NetworkBackground
