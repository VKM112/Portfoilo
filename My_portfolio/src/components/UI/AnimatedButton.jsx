import React from 'react'
import './AnimatedButton.css'

const AnimatedButton = ({ as: Component = 'button', className = '', ...props }) => {
    const combinedClassName = ['animated-button', className].filter(Boolean).join(' ')
    return <Component className={combinedClassName} {...props} />
}

export default AnimatedButton
