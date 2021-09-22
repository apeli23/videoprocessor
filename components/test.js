import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null)
    console.log('canvasRef', canvasRef)

    const draw =(ctx, frameCount)=> {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        console.log('canvas', canvas)

        const context = canvas.getContext('2d')
        console.log('context', context)

        draw(context)
        
    }, [draw])

    return (
        <div>
            <canvas ref={canvasRef} {...props} />
        </div>
    )
};
export default Canvas