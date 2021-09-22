import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    let video, canvas, context, c_tmp, ctx_tmp, ctx_out;
    const vidRef = useRef()
    // console.log('vidRef', vidRef)
    const canvasRef = useRef(null)
    // console.log('canvasRef', canvasRef)

    const draw = (ctx) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()
    }
    const computeFrame = (ctx, frameCount) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        video = vidRef.current
        // console.log('current_video', video)

        canvas = canvasRef.current
        console.log('current_canvas', canvas)

        context = canvas.getContext('2d')
        console.log('context', context)
        
        c_tmp = document.createElement('canvas')
        c_tmp.setAttribute("width", 400)
        c_tmp.setAttribute("height", 360)
        console.log('canvas_tmp', c_tmp)

        
        ctx_tmp = c_tmp.getContext('2d')
        console.log('context_tmp', ctx_tmp);

        computeFrame(context)
    }, [])
    
    return (
        <div>
            <video src='https://res.cloudinary.com/dogjmmett/video/upload/v1632248825/yt5s.com-Lady_Explaining_Green_Screen____No_Copyright_Free_Video____Vistan_Videos_720p_vs3jop.mp4' id='video' ref={vidRef} width='400' height='360' controls autoPlay muted />
            <canvas ref={canvasRef} {...props} />
        </div>
    )
};
export default Canvas